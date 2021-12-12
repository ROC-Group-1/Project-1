declare type Fx8 = number;

/**
 * Guessed declaration, this should only be used internally
 * @deprecated
 */
declare type SpriteLike = Sprite | Image;

interface DynamicObject<T> {
    [key: string]: T
}

declare interface Math {
    FastRandom: FastRandom;

    constrain(value: number, low: number, high: number): number;
    map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;
    percentChance(percentage: number): boolean;
    randomRange(min: number, max: number): number;
    isin(theta: number): number;
    icos(theta: number): number;
    pickRandom<T>(list: T[]): T;
}

declare enum SpriteFlag {
    AutoDestroy = 4,
    StayInScreen = 8,
    DestroyOnWall = 16,
    BounceOnWall = 32,
    ShowPhysics = 64,
    Invisible = 128,
    RelativeToCamera = 512,
    GhostThroughTiles = 1024,
    GhostThroughWalls = 2048,
    GhostThroughSprites = 4096,
    Ghost = 7168
}

declare enum BackgroundAlignment {
    Left = 1,
    Right = 2,
    Top = 3,
    Bottom = 4,
    Center = 5
}

declare enum CameraProperty {
    X = 0,
    Y = 1,
    Left = 2,
    Right = 3,
    Top = 4,
    Bottom = 5
}

declare enum ControllerButton {
    Left = 1,
    Up = 2,
    Right = 3,
    Down = 4,
    A = 5,
    B = 6
}

declare enum ControllerEvent {
    Connected = 1,
    Disconnected = 2
}

declare enum ControllerButtonEvent {
    Pressed,
    Released,
    Repeated
}

declare enum TileScale {
    Eight = 3,
    Sixteen = 4,
    ThirtyTwo = 5
}

declare enum DialogLayout {
    Bottom = 0,
    Left = 1,
    Right = 2,
    Top = 3,
    Center = 4,
    Full = 5
}

declare enum BeatFraction {
    Whole = 1,
    Half = 2,
    Quarter = 4,
    Eighth = 8,
    Sixteenth = 16,
    Double = 32,
    Breve = 64,
    Triplet = 128
}

declare enum MusicOutput {
    AutoDetect = 0,
    Buzzer = 1,
    HeadPhones = 2
}

declare function img(lits: any, ...args: any[]): Image;

declare function randint(min: number, max: number): number;

declare function pause(ms: number): void;

declare function pauseUntil(condition: () => boolean, timeOut?: number): void;

declare function hex(lits: any, ...args: any[]): Buffer;

declare function tilemap(lits: any, ...args: any[]): tiles.TileMapData;

declare function tilemap8(lits: any, ...args: any[]): tiles.TileMapData;

declare function tilemap16(lits: any, ...args: any[]): tiles.TileMapData;

declare function tilemap32(lits: any, ...args: any[]): tiles.TileMapData;

/**
 * Guessed interpretation, this should only be used internally
 * @deprecated
 * @private
 */
declare class SparseArray<T> {
    length: number;
    [index: number]: T
    add(sprite: T): boolean;
    addFrom(oldSet: SparseArray<T>, sprite: T): boolean;
    remove(sprite: T): boolean;
    remove(sprite: T): boolean;
    contains(sprite: T): boolean;
    clear(): void;
    pop(): T;
    toString(): string;
}

/**
 * @private
 */
declare class FastRandom {
    seed: number;
    constructor(seed?: number);
    next(): number;
    randomRange(min: number, max: number): number;
    pickRandom<T>(list: T[]): T;
    randomBool(): boolean;
    percentChance(percent: number): boolean;
    reset(): void;
}

declare class Sprite {
    say(text: any, timeOnScreen: number, textColor: number, textBoxColor: number): void;
    overlapsWith(other: Sprite): boolean;
    destroy(effect?: effects.ParticleEffect, duration?: number): void;
    setFlag(flag: SpriteFlag, on: boolean): void;
    setImage(img: Image): void;
    setPosition(x: number, y: number): void;
    setKind(value: number): void;
    kind(): number;
    setBounceOnWall(on: boolean): void;
    setStayInScreen(on: boolean): void;
    startEffect(effect: effects.ParticleEffect, duration: number): void;

}

/**
 * @private
 */
declare class Image {
    clone(): Image;
    drawLine(x0: number, y0: number, x1: number, y1: number, c: number): void;
    drawRect(x: number, y: number, w: number, h: number, c: number): void;
    setPixel(x: number, y: number, c: number): void;
    getPixel(x: number, y: number): number;
    fill(c: number): void;
    fillRect(x: number, y: number, w: number, h: number, c: number): void;
    flipX(): void;
    flipY(): void;
    replace(from: number, to: number): void;
}

declare namespace loops {
    function forever(a: () => void): void;
    function pause(ms: number): void;
}

declare namespace basic {
    function forever(a: () => void): void;
    function pause(millis: number): void;
}

declare namespace SpriteKind {
    const Player: number;
    const Projectile = 1;
    const Food: number;
    const Enemy: number;

    function create(): number;
}

declare namespace sprites {
    // Not going to declare *every* namespace with *every* const in it, so this will just function as a wildcard
    const background: DynamicObject<Image>;
    const food: DynamicObject<Image>;
    const duck: DynamicObject<Image>;
    const castle: DynamicObject<Image>;
    const builtin: DynamicObject<Image>;
    const dialog: DynamicObject<Image>;
    const dungeon: DynamicObject<Image>;
    const space: DynamicObject<Image>;
    const vehicle: DynamicObject<Image>;
    const projectile: DynamicObject<Image>;
    const kaiju: DynamicObject<Image>;
    const swamp: DynamicObject<Image>;
    const skillmap: DynamicObject<Image>;

    enum Flag {
        None = 0,
        Destroyed = 2,
        AutoDestroy = 4,
        StayInScreen = 8,
        DestroyOnWall = 16,
        BounceOnWall = 32,
        ShowPhysics = 64,
        Invisible = 128,
        IsClipping = 256,
        RelativeToCamera = 512,
        GhostThroughTiles = 1024,
        GhostThroughWalls = 2048,
        GhostThroughSprites = 4096,
        Ghost = 7168
    }

    function allOfKind(kind: number): Sprite[];
    function create(img: Image, kind?: number): Sprite;
    function createProjectileFromSide(img: Image, vx: number, vy: number): Sprite;
    function createProjectileFromSprite(img: Image, sprite: Sprite, vx: number, vy: number): Sprite;
    function createProjectile(img: Image, vx: number, vy: number, kind?: number, sprite?: Sprite): Sprite;
    function onDestroyed(kind: number, handler: (sprite: Sprite) => void): void;
    function onOverlap(kind: number, otherKind: number, handler: (sprite: Sprite, otherSprite: Sprite) => void): void;
    function onCreated(kind: number, handler: (sprite: Sprite) => void): void;

    class BaseSprite {
        id: number;
        z: number;
        constructor(z: number);
    }

    class RenderText {
        linebreaks: number[];
        font: image.Font;
        height: number;
        width: number;
        text: string;
        constructor(text: string, maxWidth: number);
        draw(canvas: Image, left: number, top: number, color: number, lineStart?: number, lineEnd?: number): void;
        drawLine(canvas: Image, left: number, top: number, lineIndex: number, color: number): void;
        drawPartial(canvas: Image, left: number, top: number, color: number, lengthToDraw: number, lineStart?: number, lineEnd?: number): boolean;
        calculatePartialHeight(startLine: number, lengthToDraw: number): number;
        lineHeight(): number;
        setMaxWidth(maxWidth: number): void;
        printableCharacters(): number;
    }

    class RenderTextAnimation {
        text: sprites.RenderText;
        height: number;
        constructor(text: sprites.RenderText, height: number);
        start(): void;
        numPages(): number;
        setPauseLength(millis: number): void;
        setTextSpeed(charactersPerSecond: number): void;
        currentHeight(): number;
        currentOffset(): number;
        draw(canvas: Image, left: number, top: number, color: number): void;
    }

    class BaseSpriteSayRenderer {
        text: string;
        fgColor: number;
        bgColor: number;
        constructor(text: string, fgColor: number, bgColor: number);
        draw(screen: Image, camera: scene.Camera, owner: Sprite): void;
        update(dt: number, camera: scene.Camera, owner: Sprite): void;
        destroy(): void;
    }

    class SpriteSayRenderer extends BaseSpriteSayRenderer {
        constructor(text: string, fg: number, bg: number, animated: boolean, timeOnScreen: number);
    }

    class LegacySpriteSayRenderer extends BaseSpriteSayRenderer {
        constructor(text: string, timeOnScreen: number, owner: Sprite, fg: number, bg: number);
    }

    class FollowingSprite {
        self: Sprite;
        target: Sprite;
        rate: number;
        turnRate: number;
        constructor(self: Sprite, target: Sprite, rate: number, turnRate: number);
    }

    class SpriteMap {
        constructor();
        neighbors(sprite: Sprite): Sprite[];
        overlaps(sprite: Sprite): Sprite[];
        draw(): void;
        resizeBuckets(sprites: Sprite[]): void;
        clear(): void;
        insertAABB(sprite: Sprite): void;
        toString(): string;
    }

    class SpriteSet extends SparseArray<Sprite> {
        static createFromArray(sprites: Sprite[]): sprites.SpriteSet;
        constructor();
        sprites(): Sprite[];
    }

    class StaticObstacle {
        layer: number;
        image: Image;
        tileIndex: number;
        top: number;
        left: number;
        x: number;
        y: number;
        height: number;
        width: number;
        bottom: number;
        right: number;
        constructor(image: Image, top: number, left: number, layer: number, tileIndex?: number);
    }
}

declare class PhysicsEngine {
    constructor();
    addSprite(sprite: Sprite): void;
    removeSprite(sprite: Sprite): void;
    moveSprite(s: Sprite, dx: Fx8, dy: Fx8): void;
    draw(): void;
    move(dt: number): void;
    setMaxSpeed(speed: number): void;
    overlaps(sprite: Sprite): Sprite[];
}

declare namespace image {
    const font5: image.Font;
    const font8: image.Font;
    const font12: image.Font

    function create(width: number, height: number): Image;
    function screenImage(): Image;
    function repeatY(count: number, image: Image): Image;
    function concatY(images: Image[]): Image;
    function getFontForText(text: string): image.Font;
    function doubledFont(f: image.Font): image.Font;
    function scaledFont(f: image.Font, size: number): image.Font;
    function ofBuffer(buf: Buffer): Image;
    function doubledIcon(icon: Buffer): Buffer;
    function setPalette(buf: Buffer): void;

    /**
     * Unknown type
     * @deprecated
     */
    class Font { }
}

declare namespace effects {
    type BackgroundEffect = ScreenEffect;

    const spray: effects.ParticleEffect;
    const trail: effects.ParticleEffect;
    const fountain: effects.ParticleEffect;
    const rings: effects.ParticleEffect;
    const fire: effects.ParticleEffect;
    const warmRadial: effects.ParticleEffect;
    const coolRadial: effects.ParticleEffect;
    const halo: effects.ParticleEffect;
    const ashes: effects.ParticleEffect;
    const disintegrate: effects.ParticleEffect;
    const blizzard: effects.ScreenEffect;
    const bubbles: effects.ScreenEffect;
    const starField: effects.ScreenEffect;
    const clouds: effects.ScreenEffect;
    const confetti: effects.ScreenEffect;
    const hearts: effects.ScreenEffect;
    const smiles: effects.ScreenEffect;
    const dissolve: effects.ImageEffect;
    const melt: effects.ImageEffect;
    const slash: effects.ImageEffect;
    const splatter: effects.ImageEffect;

    function clearParticles(anchor: Sprite | particles.ParticleAnchor): void;

    class ScreenEffect {
        constructor(anchorDefault: number, sceneDefault: number, defaultLifespan: number, sourceFactory: (anchor: particles.ParticleAnchor, particlesPerSecond: number) => particles.ParticleSource);
        startScreenEffect(duration?: number, particlesPerSecond?: number): void;
        endScreenEffect(): void;
        start(anchor: particles.ParticleAnchor, duration?: number, particlesPerSecond?: number, relativeToCamera?: boolean): void;
        destroy(anchor: Sprite, duration?: number, particlesPerSecond?: number): void;
    }

    class ParticleEffect {
        constructor(defaultParticlesPerSecond: number, defaultLifespan: number, sourceFactory: (anchor: particles.ParticleAnchor, particlesPerSecond: number) => particles.ParticleSource);
        start(anchor: particles.ParticleAnchor, duration?: number, particlesPerSecond?: number, relativeToCamera?: boolean): void;
        destroy(anchor: Sprite, duration?: number, particlesPerSecond?: number): void;
    }

    class ImageEffect {
        constructor(defaultRate: number, effectFactory: (image: Image, fastRandom?: Math["FastRandom"]) => void);
        applyTo(sprite: Sprite): void;
        change(input: Image): void;
        startScreenEffect(times?: number, delay?: number): void;
    }
}

declare namespace tiles {
    function setTilemap(tilemap: tiles.TileMapData): void;
    function getTileLocation(col: number, row: number): tiles.Location;
    function setWallAt(loc: tiles.Location, on: boolean): void;
    function placeOnTile(sprite: Sprite, loc: tiles.Location): void;
    function placeOnRandomTile(sprite: Sprite, tile: Image): void;
    function getTilesByType(tile: Image): tiles.Location[];
    function tileAtLocationEquals(location: tiles.Location, tile: Image): boolean;
    function createTilemap(data: Buffer, layer: Image, tiles: Image[], scale: TileScale): tiles.TileMapData;
    function getTileImage(loc: tiles.Location): Image;
    function getTileAt(col: number, row: number): Image;
    function getRandomTileByType(tile: Image): tiles.Location;

    class Location extends Tile {
        col: number;
        row: number;
        tileSet: number;
        constructor(col: number, row: number, map: tiles.TileMap);
    }

    class Tile {
        x: number;
        y: number;
        tileSet: number;
        constructor(col: number, row: number, map: tiles.TileMap);
        place(mySprite: Sprite): void;
    }

    class TileMapData {
        width: number;
        height: number;
        scale: TileScale;
        constructor(data: Buffer, layers: Image, tileset: Image[], scale: TileScale);
        getTile(col: number, row: number): number;
        setTile(col: number, row: number, tile: number): void;
        getTileset(): Image[];
        getTileImage(index: number): Image;
        setWall(col: number, row: number, on: boolean): void;
        isWall(col: number, row: number): boolean;
        isOutsideMap(col: number, row: number): boolean;
    }

    class TileMap {
        renderable: scene.Renderable;
        scale: TileScale;
        layer: number;
        enabled: boolean;
        constructor(scale?: TileScale);
        offsetX(value: number): number;
        offsetY(value: number): number;
        areaWidth(): number;
        areaHeight(): number;
        setData(map: tiles.TileMapData): void;
        getTile(col: number, row: number): tiles.Location;
        getTileIndex(col: number, row: number): number;
        setTileAt(col: number, row: number, index: number): void;
        getImageType(im: Image): number;
        setWallAt(col: number, row: number, on: boolean): void;
        getTilesByType(index: number): tiles.Location[];
        sampleTilesByType(index: number, maxCount: number): tiles.Location[];
        isObstacle(col: number, row: number): boolean;
        getObstacle(col: number, row: number): sprites.StaticObstacle;
        isOnWall(s: Sprite): boolean;
        getTileImage(index: number): Image;
    }
}

declare namespace controller {
    const A: controller.Button;
    const B: controller.Button;
    const left: controller.Button;
    const up: controller.Button;
    const right: controller.Button;
    const down: controller.Button;
    const menu: controller.Button;
    const anyButton: controller.Button;
    const player1: controller.Controller;
    const player2: controller.Controller;
    const player3: controller.Controller;
    const player4: controller.Controller;

    function moveSprite(sprite: Sprite, vx?: number, vy?: number): void;
    function dx(step?: number): number;
    function dy(step?: number): number;
    function pauseUntilAnyButtonIsPressed(): void;
    function players(): controller.Controller[];
    function serialize(offset: number): Buffer;
    function setRepeatDefault(delay: number, interval: number): void;

    class ControlledSprite {
        s: Sprite;
        vx: number;
        vy: number;
        constructor(s: Sprite, vx: number, vy: number);
    }

    class Controller {
        playerIndex: number;
        buttons: controller.Button[];
        analog: boolean;
        id: number;
        left: controller.Button;
        right: controller.Button;
        up: controller.Button;
        down: controller.Button;
        A: controller.Button;
        B: controller.Button;
        menu: controller.Button;
        connected: boolean;
        constructor(playerIndex: number, buttons: controller.Button[]);
        moveSprite(sprite: Sprite, vx?: number, vy?: number): void;
        onButtonEvent(btn: ControllerButton, event: ControllerButtonEvent, handler: () => void): void;
        onEvent(event: ControllerEvent, handler: () => void): void;
        isPressed(btn: ControllerButton): boolean;
        dx(step?: number): number;
        dy(step?: number): number;
        dump(): void;
        serialize(offset: number): Buffer;
    }

    class Button {
        id: number;
        repeatDelay: number;
        repeatInterval: number;
        constructor(id: number, configKey: number);
        onEvent(event: ControllerButtonEvent, handler: () => void): void;
        isPressed(): boolean;
        pauseUntil(event: ControllerButtonEvent): void;
        toString(): string;
        pressureLevel(): number;
        setPressed(pressed: boolean): void;
    }
}

declare namespace game {
    function over(win?: boolean, effect?: effects.BackgroundEffect): void;
    function onUpdate(a: () => void): void;
    function onUpdateInterval(period: number, a: () => void): void;
    function ask(title: any, subtitle?: any): boolean;
    function askForString(message: any, answerLength?: number): string;
    function splash(title: any, subtitle?: any): void;
    function setDialogCursor(cursor: Image): void;
    function setDialogFrame(frame: Image): void;
    function setDialogTextColor(color: number): void;
    function setDialogFont(font: image.Font): void;
    function showLongText(str: any, layout: DialogLayout): void;
    function showDialog(title: string, subtitle: string, footer?: string): void;
    function reset(): void;
    function runtime(): number;
}

declare namespace music {
    const baDing: music.Melody;
    const wawawawaa: music.Melody;
    const jumpUp: music.Melody;
    const jumpDown: music.Melody;
    const powerUp: music.Melody;
    const powerDown: music.Melody;
    const magicWand: music.Melody;
    const siren: music.Melody;
    const pewpew: music.Melody;
    const knock: music.Melody;
    const footstep: music.Melody;
    const thump: music.Melody;
    const smallCrash: music.Melody;
    const zapped: music.Melody;
    const buzzer: music.Melody;
    const sonar: music.Melody;
    const spooky: music.Melody;
    const beamUp: music.Melody;

    function playMelody(melody: string, tempo: number): void;
    function playTone(frequency: number, ms: number): void;
    function ringTone(frequency: number): void;
    function rest(ms: number): void;
    function setVolume(volume: number): void;
    function changeTempoBy(bpm: number): void;
    function setTempo(bpm: number): void;
    function tempo(): number;
    function beat(fraction?: BeatFraction): number;
    function volume(): number;
    function forceOutput(buf: MusicOutput): void;

    class Melody {
        static stopAll(): void;
        text: string;
        constructor(text: string);
        play(volume?: number): void;
        playUntilDone(volume?: number): void;
        loop(volume?: number): void;
        stop(): void;
        toString(): string;
    }

    class MelodyPlayer {
        melody: music.Melody;
        onPlayFinished: () => void;
        constructor(m: music.Melody);
        stop(): void;
        play(volume: number): void;
    }
}

declare namespace info {
    const player1: info.PlayerInfo;
    const player2: info.PlayerInfo;
    const player3: info.PlayerInfo;
    const player4: info.PlayerInfo;

    enum Visibility {
        None = 0,
        Countdown = 1,
        Score = 2,
        Life = 4,
        Hud = 8,
        Multi = 16,
        UserHeartImage = 32
    }

    function setScore(value: number): void;
    function changeScoreBy(value: number): void;
    function score(): number;
    function highScore(): number;
    function setLife(value: number): void;
    function changeLifeBy(value: number): void;
    function life(): number;
    function onLifeZero(handler: () => void): void;
    function startCountdown(duration: number): void;
    function stopCountdown(): void;
    function onCountdownEnd(handler: () => void): void;
    function saveHighScore(): void;
    function hasScore(): boolean;
    function hasLife(): boolean;
    function setLifeImage(image: Image): void;
    function showLife(on: boolean): void;
    function showScore(on: boolean): void;
    function showCountdown(on: boolean): void;
    function setBorderColor(color: number): void;
    function setBackgroundColor(color: number): void;
    function setFontColor(color: number): void;
    function borderColor(): number;
    function backgroundColor(): number;
    function fontColor(): number;

    class PlayerInfo {
        bg: number;
        border: number;
        fc: number;
        showScore?: boolean;
        showLife?: boolean;
        visibility: info.Visibility;
        showPlayer?: boolean;
        x?: number;
        y?: number;
        left?: boolean;
        up?: boolean;
        constructor(player: number);
        score(): number;
        setScore(value: number): void;
        changeScoreBy(value: number): void;
        life(): number;
        setLife(value: number): void;
        changeLifeBy(value: number): void;
        hasLife(): boolean;
        onLifeZero(handler: () => void): void;
        getState(): info.PlayerState;
        id(): number;
        hasScore(): boolean;
        raiseLifeZero(gameOver: boolean): void;
        drawPlayer(): void;
        drawScore(): void;
        drawLives(): void;
    }

    class PlayerState {
        score: number;
        life: number;
        lifeZeroHandler: () => void;
        constructor();
    }
}

declare namespace assets {
    function tilemap(lits: any, ...args: any[]): tiles.TileMapData;
    function image(lits: any, ...args: any[]): Image;
    function tile(lits: any, ...args: any[]): Image;
    function animation(lits: any, ...args: any[]): Image[]
}

declare namespace scene {
    const ON_PAINT_Z = -20;
    const TILE_MAP_Z = -1;
    const SPRITE_Z = 0;
    const CONTROLLER_PRIORITY = 8;
    const UPDATE_CONTROLLER_PRIORITY = 13;
    const CONTROLLER_SPRITES_PRIORITY = 13;
    const FOLLOW_SPRITE_PRIORITY = 14;
    const PHYSICS_PRIORITY = 15;
    const ANIMATION_UPDATE_PRIORITY = 15;
    const UPDATE_INTERVAL_PRIORITY = 19;
    const UPDATE_PRIORITY = 20;
    const PRE_RENDER_UPDATE_PRIORITY = 55;
    const RENDER_BACKGROUND_PRIORITY = 60;
    const ON_SHADE_Z = 80;
    const RENDER_SPRITES_PRIORITY = 90;
    const HUD_Z = 100;
    const RENDER_DIAGNOSTICS_PRIORITY = 150;
    const UPDATE_SCREEN_PRIORITY = 200;

    enum Flag {
        NeedsSorting = 1,
        SeeThrough = 2,
        IsRendering = 4
    }

    function screenWidth(): number;
    function screenHeight(): number;
    function setBackgroundColor(color: number): void;
    function setBackgroundImage(img: Image): void;
    function backgroundColor(): number;
    function backgroundImage(): Image;
    function onHitWall(kind: number, handler: (sprite: Sprite, location: tiles.Location) => void): void;
    function onOverlapTile(kind: number, tile: Image, handler: (sprite: Sprite, location: tiles.Location) => void): void;
    function cameraShake(amplitude?: number, duration?: number): void;
    function cameraFollowSprite(sprite: Sprite): void;
    function centerCameraAt(x: number, y: number): void;
    function cameraLeft(): number;
    function cameraTop(): number;
    function cameraProperty(property: CameraProperty): number;
    function addBackgroundLayer(image: Image, distance?: number, alignment?: BackgroundAlignment): void;
    function createRenderable(z: number, handler: (target: Image, camera: scene.Camera) => void, shouldBeVisible?: () => boolean): scene.Renderable;
    function setTileMapLevel(map: tiles.TileMapData): void;

    class Background {
        color: number;
        camera: scene.Camera;
        image: Image;
        constructor(camera: scene.Camera);
        addLayer(pic: Image, distance: number, alignment: BackgroundAlignment): scene.BackgroundLayer;
        hasBackgroundImage(): boolean;
        draw(): void;
    }

    class BackgroundLayer {
        distance: number;
        img: Image;
        repeatX: boolean;
        repeatY: boolean;
        alignX: BackgroundAlignment;
        alignY: BackgroundAlignment;
        constructor(distance: number, alignment: BackgroundAlignment, img: Image);
        draw(offsetX: number, offsetY: number): void;

    }

    class Camera {
        drawOffsetX: number;
        drawOffsetY: number;
        sprite: Sprite;
        offsetX: number;
        offsetY: number;
        x: number;
        y: number;
        left: number;
        right: number;
        top: number;
        bottom: number;
        constructor();
        shake(amplitude?: number, duration?: number): void;
        update(): void;
    }

    class Renderable extends sprites.BaseSprite {
        constructor(handler: (target: Image, camera: scene.Camera) => void, shouldBeVisible: () => boolean, z: number);
        destroy(): void;
    }

    class SpriteHandler {
        kind: number;
        handler: (sprite: Sprite) => void;
        constructor(kind: number, handler: (sprite: Sprite) => void);
    }

    class OverlapHandler {
        kind: number;
        otherKind: number;
        handler: (sprite: Sprite, otherSprite: Sprite) => void;
        constructor(kind: number, otherKind: number, handler: (sprite: Sprite, otherSprite: Sprite) => void);
    }

    class TileWallHandler {
        spriteKind: number;
        handler: (sprite: Sprite, location: tiles.Location) => void;
        constructor(spriteKind: number, handler: (sprite: Sprite, location: tiles.Location) => void);
    }

    class TileOverlapHandler extends TileWallHandler {
        tileKind: Image;
        constructor(spriteKind: number, tileKind: Image, handler: (sprite: Sprite, location: tiles.Location) => void);
    }

    class GameForeverHandler {
        lock: boolean;
        handler: () => void;
        constructor(handler: () => void);
    }

    class Scene {
        static initializers: ((scene: scene.Scene) => void)[];
        eventContext: control.EventContext;
        background: scene.Background;
        tileMap: tiles.TileMap;
        allSprites: SpriteLike[];
        spritesByKind: SparseArray<sprites.SpriteSet>;
        physicsEngine: PhysicsEngine;
        camera: scene.Camera;
        flags: number;
        destroyedHandlers: scene.SpriteHandler[];
        createdHandlers: scene.SpriteHandler[];
        overlapHandlers: scene.OverlapHandler[];
        overlapMap: SparseArray<number[]>;
        tileOverlapHandlers: scene.TileOverlapHandler[];
        collisionHandlers: scene.SpriteHandler[][];
        wallCollisionHandlers: scene.TileWallHandler[];
        gameForeverHandlers: scene.GameForeverHandler[];
        particleSources: particles.ParticleSource[];
        controlledSprites: controller.ControlledSprite[][];
        followingSprites: sprites.FollowingSprite[];
        data: any;
        constructor(eventContext: control.EventContext, previousScene?: scene.Scene);
        init(): void;
        millis(): number;
        addSprite(sprite: SpriteLike): void;
        destroy(): void;
        render(): void;
    }

    export namespace systemMenu {
        const CARD_NORMAL: Image;
        const CARD_SELECTED: Image;
        const CARD_ACTIVE: Image;
        const VOLUME_UP_ICON: Image;
        const BRIGHTNESS_DOWN_ICON: Image;
        const CLOSE_MENU_ICON: Image;
        const VOLUME_DOWN_ICON: Image;
        const SLEEP_ICON: Image;
        const CONSOLE_ICON: Image;
        const BRIGHTNESS_UP_ICON: Image;
        const STATS_ICON: Image;

        enum CardState {
            Selected = 0,
            Active = 1,
            None = 2
        }

        function closeMenu(): void;
        function buildOptionList(): scene.systemMenu.MenuOption[];
        function buildOptionList(): scene.systemMenu.MenuOption[];
        function buildMenuTheme(cardWidth: number, cardSpacing: number, infoFont?: image.Font, headerFont?: image.Font): scene.systemMenu.MenuTheme;
        function addEntry(name: () => string, clickHandler: () => void, icon: Image): void;
        function register(): void;
        function showSystemMenu(): void;
        function isVisible(): boolean;

        class MenuOption {
            getText: () => string
            action: () => void
            constructor(iconImage: Image, getText: () => string, action: () => void);
            show(): void;
            position(left: number, top: number): void;
            setOffset(offset: number): void;
            setTheme(theme: scene.systemMenu.MenuTheme): void;
            setState(state: scene.systemMenu.CardState): void;
            dispose(): void;
        }

        class PauseMenu {
            constructor(generator: () => scene.systemMenu.MenuOption[], theme?: scene.systemMenu.MenuTheme);
            show(): void;
            onUpdate(): void;
            setSelection(selection: number): void;
            drawText(): void;
            dispose(): void;
        }

        /**
         * Unknown type
         * @deprecated
         */
        class MenuTheme { }
    }
}

declare namespace particles {
    /**
     * **DO NOT** use this, I'm not sure why it refers to this but it isn't real
     * @deprecated
     */
    type ParticleAnchor = Sprite;
    
    const defaultFactory: particles.SprayFactory;

    function clearAll(): void;
    function enableAll(): void;
    function disableAll(): void;
    function cacheSin(slices: number): Fx8[];
    function cacheCos(slices: number): Fx8[]
    function createParticleSource(sprite: Sprite, particlesPerSecond: number): particles.ParticleSource;

    class Particle {
        vx: Fx8;
        vy: Fx8;
        lifespan: number;
        next: particles.Particle;
        data?: number;
        color?: number;
        constructor();
    }

    class ParticleSource extends scene.Renderable {
        priority: number;
        anchor: particles.ParticleAnchor;
        lifespan: number;
        enabled: boolean;
        factory: particles.ParticleFactory;
        constructor(anchor: particles.ParticleAnchor, particlesPerSecond: number, factory?: particles.ParticleFactory);
        clear(): void;
        setAcceleration(ax: number, ay: number): void;
        setEnabled(on: boolean): void;
        setRelativeToCamera(on: boolean): void;
        setAnchor(anchor: particles.ParticleAnchor): void;
        setRate(particlesPerSecond: number): void;
        setFactory(factory: particles.ParticleFactory): void;
    }

    class FireSource extends ParticleSource {
        constructor(anchor: particles.ParticleAnchor, particlesPerSecond: number, factory?: particles.ParticleFactory);
        updateParticle(p: particles.Particle, fixedDt: Fx8): void;
    }

    class BubbleSource extends ParticleSource {
        stateChangePercentage: number;
        oscillationPercentage: number;
        constructor (anchor: particles.ParticleAnchor, particlesPerSecond: number, maxState: number, factory?: particles.ParticleFactory);
        updateParticle(p: particles.Particle, fixedDt: Fx8): void;
    }

    class ParticleFactory {
        constructor();
        createParticle(anchor: particles.ParticleAnchor): particles.Particle;
        drawParticle(particle: particles.Particle, x: Fx8, y: Fx8): void;
    }

    class SprayFactory extends ParticleFactory {
        constructor(speed: number, centerDegrees: number, arcDegrees: number);
        setSpeed(pixelsPerSecond: number): void;
        setDirection(centerDegrees: number, arcDegrees: number): void;
    }

    class AreaFactory extends ParticleFactory {
        xRange: number;
        yRange: number;
        minLifespan: number;
        maxLifespan: number;
        constructor(xRange: number, yRange: number, minLifespan?: number, maxLifespan?: number);
        setDirection(centerDegrees: number, arcDegrees: number): void;
        setSpeed(pixelsPerSecond: number): void;
    }

    class TrailFactory extends ParticleFactory {
        minLifespan: number;
        maxLifespan: number;
        xRange: number
        yRange: number
        constructor(sprite: particles.ParticleAnchor, minLifespan: number, maxLifespan: number)
    }

    class ShapeFactory extends ParticleFactory {
        maxLifespan: number;
        minLifespan: number;
        xRange: number;
        yRange: number;
        constructor(xRange: number, yRange: number, source: Image);
        addShape(shape: Image): void;
        setDirection(centerDegrees: number, arcDegrees: number): void;
        setSpeed(pixelsPerSecond: number): void;
    }

    class ConfettiFactory extends ParticleFactory {
        maxLifespan: number;
        minLifespan: number;
        xRange: number;
        yRange: number;
        constructor(xRange: number, yRange: number);
        addShape(shape: Image): void;
        setDirection(centerDegrees: number, arcDegrees: number): void;
        setSpeed(pixelsPerSecond: number): void;
    }

    class FireFactory extends ParticleFactory {
        constructor(radius: number);
    }

    class RadialFactory extends ParticleFactory {
        constructor(radius: number, speed: number, spread: number, colors?: number[]);
        setRadius(r: number): void;
        setSpeed(s: number): void;
        setSpread(s: number): void;
    }

    class AshFactory extends ParticleFactory {
        xRange: number;
        yRange: number;
        minLifespan: number;
        maxLifespan: number;
        constructor(anchor: particles.ParticleAnchor, updateImage?: boolean, percentKept?: number);
        setDirection(centerDegrees: number, arcDegrees: number): void;
        setSpeed(pixelsPerSecond: number): void;
    }

    class BubbleFactory extends ParticleFactory {
        stateCount: number;
        xRange: number;
        yRange: number;
        minLifespan: number;
        maxLifespan: number;
        constructor(sprite: particles.ParticleAnchor, minLifespan: number, maxLifespan: number);
    }

    class StarFactory extends ParticleFactory {
        minRate: number;
        maxRate: number;
        images: Image[];
        constructor(possibleColors?: number[], minRate?: number, maxRate?: number);
    }

    class CloudFactory extends ParticleFactory {
        minRate: number;
        maxRate: number;
        clouds: Image[];
        camera: scene.Camera;
        constructor(minRate?: number, maxRate?: number);
    }
}

/**
 * Gameboy related methods, refrain from using these
 */
declare namespace control {
    const timer1: control.Timer;
    const timer2: control.Timer;
    const timer3: control.Timer;
    const timer4: control.Timer;
    const timer5: control.Timer;
    const timer6: control.Timer;
    const timer7: control.Timer;
    const timer8: control.Timer;

    enum PXT_Panic {
        CODAL_OOM = 20,
        GC_OOM = 21,
        GC_TOO_BIG_ALLOCATION = 22,
        CODAL_HEAP_ERROR = 30,
        CODAL_NULL_DEREFERENCE = 40,
        CODAL_USB_ERROR = 50,
        CODAL_HARDWARE_CONFIGURATION_ERROR = 90,
        INVALID_BINARY_HEADER = 901,
        OUT_OF_BOUNDS = 902,
        REF_DELETED = 903,
        SIZE = 904,
        INVALID_VTABLE = 905,
        INTERNAL_ERROR = 906,
        NO_SUCH_CONFIG = 907,
        NO_SUCH_PIN = 908,
        INVALID_ARGUMENT = 909,
        MEMORY_LIMIT_EXCEEDED = 910,
        SCREEN_ERROR = 911,
        MISSING_PROPERTY = 912,
        INVALID_IMAGE = 913,
        CALLED_FROM_ISR = 914,
        HEAP_DUMPED = 915,
        STACK_OVERFLOW = 916,
        BLOCKING_TO_STRING = 917,
        VM_ERROR = 918,
        SETTINGS_CLEARED = 920,
        SETTINGS_OVERLOAD = 921,
        SETTINGS_SECRET_MISSING = 922,
        DELETE_ON_CLASS = 923,
        CAST_FIRST = 980,
        CAST_FROM_UNDEFINED = 980,
        CAST_FROM_BOOLEAN = 981,
        CAST_FROM_NUMBER = 982,
        CAST_FROM_STRING = 983,
        CAST_FROM_OBJECT = 984,
        CAST_FROM_FUNCTION = 985,
        CAST_FROM_NULL = 989,
        UNHANDLED_EXCEPTION = 999
    }
    
    enum IntervalMode {
        Interval = 0,
        Timeout = 1,
        Immediate = 2
    }

    function millis(): number;
    function reset(): void;
    function assert(cond: boolean, code: number): void;
    function waitMicros(micros: number): void;
    function panic(code: number): void;
    function raiseEvent(src: number, value: number): void;
    function onEvent(src: number, value: number, handler: () => void, flags?: number): void;
    function deviceSerialNumber(): number;
    function deviceLongSerialNumber(): Buffer;
    function runInParallel(a: () => void): void;
    function waitForEvent(src: number, value: number): void;
    function runInBackground(a: () => void): void;
    function deviceDalVersion(): string;
    function createBuffer(size: number): Buffer;
    function createBufferFromUTF8(str: string): Buffer;
    function micros(): number;
    function internalOnEvent(src: number, value: number, handler: () => void, flags?: number): void;
    function dmesgValue(v: any): void;
    function gc(): void;
    function heapDump(): void;
    function setDebugFlags(flags: number): void;
    function heapSnapshot(): void;
    function profilingEnabled(): boolean;
    function fail(message: string): void;
    function allocateEventSource(): number;
    function getConfigValue(key: number, defl: number): number;
    function programHash(): number;
    function programName(): string;
    function ramSize(): number;
    function benchmark(f: () => void): number;
    function setInterval(func: () => void, delay: number, mode: control.IntervalMode): number;
    function clearInterval(intervalId: number, mode: control.IntervalMode): void;
    function gcStats(): control.GCStats;
    function eventContext(): control.EventContext;
    function pushEventContext(): control.EventContext;
    function popEventContext(): void;
    function onIdle(handler: () => void): void;
    function removeIdleHandler(handler: () => void): void;
    function enablePerfCounter(name?: string): void;
    function dmesgPerfCounters(): void;
    function isUSBInitialized(): boolean;
    function allocateNotifyEvent(): number;
    function dmesg(s: string): void;
    function dmesgPtr(str: string, ptr: Object): void;

    class AnimationQueue {
        running: boolean;
        eventID: number;
        interval: number;
        constructor();
        runUntilDone(render: () => boolean): void;
        isCancelled(evid: number): boolean;
        cancel(): void;
    }

    class FrameCallback {
        order: number;
        handler: () => void;
        constructor();
    }

    class EventContext {
        static lastStats: string;
        static onStats: (stats: string) => void;
        deltaTimeMillis: number;
        deltaTime: number;
        constructor();
        register(): void;
        unregister(): void;
        registerFrameHandler(order: number, handler: () => void): control.FrameCallback;
        unregisterFrameHandler(fn: control.FrameCallback): void;
        registerHandler(src: number, value: number, handler: () => void, flags: number): void;
        addIdleHandler(handler: () => void): void;
        removeIdleHandler(handler: () => void): void;
    }

    class Timer {
        start: number;
        constructor();
        millis(): number;
        seconds(): number;
        reset(): void;
        pauseUntil(ms: number): void;
    }

    /**
     * Unknown type
     * @deprecated
     */
    class GCStats {

    }

    export namespace simmessages {
        const CONTROL_MESSAGE_RECEIVED = 1;
        const CONTROL_MESSAGE_EVT_ID = 2999;

        function send(channel: string, message: Buffer, parentOnly?: boolean): void;
        function onReceived(channel: string, handler: (msg: Buffer) => void): void;
    }
}