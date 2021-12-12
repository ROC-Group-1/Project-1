import { readFileSync, writeFileSync } from "fs";
import { BetterObject, DevConsole } from "node-utils";
import { join } from "path";

import { DepInfo } from "./interfaces/DepInfo";

// This doesn't support modules with the same names nor duplicate scopes
const info: BetterObject<DepInfo> = {};
const writeFile = join(__dirname, "../../bundled.ts");

DevConsole.info("Starting with bundling \x1b[36mProject 1\x1b[0m");
parseDeps(join(__dirname, "../../dist/index.js"));
DevConsole.info("Bundling the contents");
writeFileSync(writeFile, "interface DynamicObject<T> { [key: string]: T }\n" + BetterObject.entries(info)
    .sort(([aKey], [_, bValue]) => +bValue.dependencies.includes(<string>aKey))
    .map(([_, value]) => value.cleanFile)
    .join("")
    .replace(/^\s*[\r\n]/gm, ""));
DevConsole.info("Built to \x1b[36m%s\x1b[0m", writeFile);

function parseDeps(path: string, exportName: string = "global"): void {
    const moduleInfo: DepInfo = {
        dependencies: [],
        cleanFile: readFileSync(path, "utf8")
            .replace(/exports\..+?=\s*void 0;?/g, exportName == "global" ? "" : `const ${exportName}: DynamicObject<any> = {};`)
            .replace(/exports(\..+?\s*=\s*)/g, `${exportName}$1`)
            .replace(/(?:"use strict";?|Object\.defineProperty\(exports, "__esModule", { value: true }\);?)/g, "")
    };

    DevConsole.info("Parsing \x1b[36m%s\x1b[0m", path);

    [...moduleInfo.cleanFile.matchAll(/(?:const|let|var)\s+(.+?)\s*=\s*require\((['"`])(.+?)\2\);?/g)].forEach((dep) => {
        const fullPath = join(path.substring(0, path.lastIndexOf("\\")), dep[3].endsWith(".js") ? dep[3] : `${dep[3]}.js`);

        moduleInfo.dependencies.push(fullPath);
        moduleInfo.cleanFile = moduleInfo.cleanFile.replace(dep[0], "");


        if (!info[fullPath]) {
            parseDeps(fullPath, dep[1]);
        }
    });

    info[path] = moduleInfo;
}