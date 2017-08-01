/**
 * Created by admin on 2016/11/4.
 */
var voices=null;

if ('speechSynthesis' in window) {
    // First call to getVoices may be null...later an event indicates when it is loaded
    voices = window.speechSynthesis.getVoices();

    // Save voices when loaded after first call
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
    };
}

var $options=$("#options");
var $texts = $("#texts");
var $needRoman = $("#need-roman");
var $optionsClear = $("#options-clear");
var $optionsOkey = $("#options-okey");

var domStage=document.getElementById("stage");

var renderer=PIXI.autoDetectRenderer(1920,1080,{view:domStage});
var stage=new PIXI.Container();

var monsterStage=new PIXI.Container();
stage.addChild(monsterStage);

var audios={
    a: new Howl({src:["./res/audio/a.mp3"]}),
    i: new Howl({src:["./res/audio/i.mp3"]}),
    u: new Howl({src:["./res/audio/u.mp3"]}),
    e: new Howl({src:["./res/audio/e.mp3"]}),
    o: new Howl({src:["./res/audio/o.mp3"]}),
    ka: new Howl({src:["./res/audio/ka.mp3"]}),
    ki: new Howl({src:["./res/audio/ki.mp3"]}),
    ku: new Howl({src:["./res/audio/ku.mp3"]}),
    ke: new Howl({src:["./res/audio/ke.mp3"]}),
    ko: new Howl({src:["./res/audio/ko.mp3"]}),
    sa: new Howl({src:["./res/audio/sa.mp3"]}),
    shi:new Howl({src:["./res/audio/shi.mp3"]}),
    su:new Howl({src:["./res/audio/su.mp3"]}),
    se:new Howl({src:["./res/audio/se.mp3"]}),
    so:new Howl({src:["./res/audio/so.mp3"]}),
    ta:new Howl({src:["./res/audio/ta.mp3"]}),
    chi:new Howl({src:["./res/audio/chi.mp3"]}),
    tsu:new Howl({src:["./res/audio/tsu.mp3"]}),
    te:new Howl({src:["./res/audio/te.mp3"]}),
    to:new Howl({src:["./res/audio/to.mp3"]}),
    na:new Howl({src:["./res/audio/na.mp3"]}),
    ni:new Howl({src:["./res/audio/ni.mp3"]}),
    nu:new Howl({src:["./res/audio/nu.mp3"]}),
    ne:new Howl({src:["./res/audio/ne.mp3"]}),
    no:new Howl({src:["./res/audio/no.mp3"]}),
    ha:new Howl({src:["./res/audio/ha.mp3"]}),
    hi:new Howl({src:["./res/audio/hi.mp3"]}),
    fu:new Howl({src:["./res/audio/fu.mp3"]}),
    he:new Howl({src:["./res/audio/he.mp3"]}),
    ho:new Howl({src:["./res/audio/ho.mp3"]}),
    ma:new Howl({src:["./res/audio/ma.mp3"]}),
    mi:new Howl({src:["./res/audio/mi.mp3"]}),
    mu:new Howl({src:["./res/audio/mu.mp3"]}),
    me:new Howl({src:["./res/audio/me.mp3"]}),
    mo:new Howl({src:["./res/audio/mo.mp3"]}),
    ya:new Howl({src:["./res/audio/ya.mp3"]}),
    yu:new Howl({src:["./res/audio/yu.mp3"]}),
    yo:new Howl({src:["./res/audio/yo.mp3"]}),
    ra:new Howl({src:["./res/audio/ra.mp3"]}),
    ri:new Howl({src:["./res/audio/ri.mp3"]}),
    ru:new Howl({src:["./res/audio/ru.mp3"]}),
    re:new Howl({src:["./res/audio/re.mp3"]}),
    ro:new Howl({src:["./res/audio/ro.mp3"]}),
    wa:new Howl({src:["./res/audio/wa.mp3"]}),
    wo:new Howl({src:["./res/audio/wo.mp3"]}),
    ga:new Howl({src:["./res/audio/ga.mp3"]}),
    gi:new Howl({src:["./res/audio/gi.mp3"]}),
    gu:new Howl({src:["./res/audio/gu.mp3"]}),
    ge:new Howl({src:["./res/audio/ge.mp3"]}),
    go:new Howl({src:["./res/audio/go.mp3"]}),
    za:new Howl({src:["./res/audio/za.mp3"]}),
    ji:new Howl({src:["./res/audio/ji.mp3"]}),
    zu:new Howl({src:["./res/audio/zu.mp3"]}),
    ze:new Howl({src:["./res/audio/ze.mp3"]}),
    zo:new Howl({src:["./res/audio/zo.mp3"]}),
    da:new Howl({src:["./res/audio/da.mp3"]}),
    di:new Howl({src:["./res/audio/ji.mp3"]}),
    du:new Howl({src:["./res/audio/zu.mp3"]}),
    de:new Howl({src:["./res/audio/de.mp3"]}),
    do:new Howl({src:["./res/audio/do.mp3"]}),
    ba:new Howl({src:["./res/audio/ba.mp3"]}),
    bi:new Howl({src:["./res/audio/bi.mp3"]}),
    bu:new Howl({src:["./res/audio/bu.mp3"]}),
    be:new Howl({src:["./res/audio/be.mp3"]}),
    bo:new Howl({src:["./res/audio/bo.mp3"]}),
    pa:new Howl({src:["./res/audio/pa.mp3"]}),
    pi:new Howl({src:["./res/audio/pi.mp3"]}),
    pu:new Howl({src:["./res/audio/pu.mp3"]}),
    pe:new Howl({src:["./res/audio/pe.mp3"]}),
    po:new Howl({src:["./res/audio/po.mp3"]}),
    kya:new Howl({src:["./res/audio/kya.mp3"]}),
    kyu:new Howl({src:["./res/audio/kyu.mp3"]}),
    kyo:new Howl({src:["./res/audio/kyo.mp3"]}),
    nya:new Howl({src:["./res/audio/nya.mp3"]}),
    nyu:new Howl({src:["./res/audio/nyu.mp3"]}),
    nyo:new Howl({src:["./res/audio/nyo.mp3"]}),
    hya:new Howl({src:["./res/audio/hya.mp3"]}),
    hyu:new Howl({src:["./res/audio/hyu.mp3"]}),
    hyo:new Howl({src:["./res/audio/hyo.mp3"]}),
    mya:new Howl({src:["./res/audio/mya.mp3"]}),
    myu:new Howl({src:["./res/audio/myu.mp3"]}),
    myo:new Howl({src:["./res/audio/myo.mp3"]}),
    rya:new Howl({src:["./res/audio/rya.mp3"]}),
    ryi:new Howl({src:["./res/audio/ryu.mp3"]}),
    ryo:new Howl({src:["./res/audio/ryo.mp3"]}),
    gya:new Howl({src:["./res/audio/gya.mp3"]}),
    gyu:new Howl({src:["./res/audio/gyu.mp3"]}),
    gyo:new Howl({src:["./res/audio/gyo.mp3"]}),
    ja:new Howl({src:["./res/audio/ja.mp3"]}),
    ju:new Howl({src:["./res/audio/ju.mp3"]}),
    jo:new Howl({src:["./res/audio/jo.mp3"]}),
    bya:new Howl({src:["./res/audio/bya.mp3"]}),
    byu:new Howl({src:["./res/audio/byu.mp3"]}),
    byo:new Howl({src:["./res/audio/byo.mp3"]}),
    pya:new Howl({src:["./res/audio/pya.mp3"]}),
    pyu:new Howl({src:["./res/audio/pyu.mp3"]}),
    pyo:new Howl({src:["./res/audio/pyo.mp3"]})
}

var Japanese={
    pingText:[
        {text:"あ",code:"a"},{text:"い",code:"i"}, {text:"う",code:"u"}, {text:"え",code:"e"}, {text:"お",code:"o"},
        {text:"か",code:"ka"},{text:"き",code:"ki"},{text:"く",code:"ku"},{text:"け",code:"ke"},{text:"こ",code:"ko"},
        {text:"さ",code:"sa"},{text:"し",code:"shi",code2:"si"},{text:"す",code:"su"},{text:"せ",code:"se"},{text:"そ",code:"so"},
        {text:"た",code:"ta"},{text:"ち",code:"chi"},{text:"つ",code:"tsu",code2:"tu"},{text:"て",code:"te"},{text:"と",code:"to"},
        {text:"な",code:"na"},{text:"に",code:"ni"},{text:"ぬ",code:"nu"},{text:"ね",code:"ne"},{text:"の",code:"no"},
        {text:"は",code:"ha"},{text:"ひ",code:"hi"},{text:"ふ",code:"fu"},{text:"へ",code:"he"},{text:"ほ",code:"ho"},
        {text:"ま",code:"ma"},{text:"み",code:"mi"},{text:"む",code:"mu"},{text:"め",code:"me"},{text:"も",code:"mo"},
        {text:"や",code:"ya"},{text:"ゆ",code:"yu"},{text:"よ",code:"yo"},
        {text:"ら",code:"ra"},{text:"り",code:"ri"},{text:"る",code:"ru"},{text:"れ",code:"re"},{text:"ろ",code:"ro"},
        {text:"わ",code:"wa"},{text:"を",code:"wo"},
        {text:"が",code:"ga"},{text:"ぎ",code:"gi"},{text:"ぐ",code:"gu"},{text:"げ",code:"ge"},{text:"ご",code:"go"},
        {text:"ざ",code:"za"},{text:"じ",code:"ji"},{text:"ず",code:"zu"},{text:"ぜ",code:"ze"},{text:"ぞ",code:"zo"},
        {text:"だ",code:"da"},{text:"ぢ",code:"di"},{text:"づ",code:"du"},{text:"で",code:"de"},{text:"ど",code:"do"},
        {text:"ば",code:"ba"},{text:"び",code:"bi"},{text:"ぶ",code:"bu"},{text:"べ",code:"be"},{text:"ぼ",code:"bo"},
        {text:"ぱ",code:"pa"},{text:"ぴ",code:"pi"},{text:"ぷ",code:"pu"},{text:"ぺ",code:"pe"},{text:"ぽ",code:"po"},
        {text:"きゃ",code:"kya"},{text:"きゅ",code:"kyu"},{text:"きょ",code:"kyo"},
        {text:"しゃ",code:"sya"},{text:"しゅ",code:"syu"},{text:"しょ",code:"syo"},
        {text:"ちゃ",code:"cya"},{text:"ちゅ",code:"cyu"},{text:"ちょ",code:"cyo"},
        {text:"にゃ",code:"nya"},{text:"にゅ",code:"nyu"},{text:"にょ",code:"nyo"},
        {text:"ひゃ",code:"hya"},{text:"ひゅ",code:"hyu"},{text:"ひょ",code:"hyo"},
        {text:"みゃ",code:"mya"},{text:"みゅ",code:"myu"},{text:"みょ",code:"myo"},
        {text:"りゃ",code:"rya"},{text:"りゅ",code:"ryu"},{text:"りょ",code:"ryo"},
        {text:"ぎゃ",code:"gya"},{text:"ぎゅ",code:"gyu"},{text:"ぎょ",code:"gyo"},
        {text:"じゃ",code:"ja",code2:"jya"},{text:"じゅ",code:"ju",code2:"jyu"},{text:"じょ",code:"jo",code2:"jyo"},
        {text:"びゃ",code:"bya"},{text:"びゅ",code:"byu"},{text:"びょ",code:"byo"},
        {text:"ぴゃ",code:"pya"},{text:"ぴゅ",code:"pyu"},{text:"ぴょ",code:"pyo"}
    ],
    pianText:[
        {text:"ア",code:"a"},{text:"イ",code:"i"},{text:"ウ",code:"u"},{text:"エ",code:"e"},{text:"オ",code:"o"},
        {text:"カ",code:"ka"},{text:"キ",code:"ki"},{text:"ク",code:"ku"},{text:"ケ",code:"ke"},{text:"コ  ",code:"ko"},
        {text:"サ",code:"sa"},{text:"シ",code:"shi",code2:"si"},{text:"ス",code:"su"},{text:"セ",code:"se"},{text:"ソ",code:"so"},
        {text:"タ",code:"ta"},{text:"チ",code:"chi"},{text:"ツ",code:"tsu",code2:"tu"},{text:"テ",code:"te"},{text:"ト",code:"to"},
        {text:"ナ",code:"na"},{text:"ニ",code:"ni"},{text:"ヌ",code:"nu"},{text:"ネ",code:"ne"},{text:"ノ",code:"no"},
        {text:"ハ",code:"ha"},{text:"ヒ",code:"hi"},{text:"フ",code:"fu"},{text:"ヘ",code:"he"},{text:"ホ",code:"ho"},
        {text:"マ",code:"ma"},{text:"ミ",code:"mi"},{text:"ム",code:"mu"},{text:"メ",code:"me"},{text:"モ",code:"mo"},
        {text:"ヤ",code:"ya"},{text:"ユ",code:"yu"},{text:"ヨ",code:"yo"},
        {text:"ラ",code:"ra"},{text:"リ",code:"ri"},{text:"ル",code:"ru"},{text:"レ",code:"re"},{text:"ロ",code:"ro"},
        {text:"ワ",code:"wa"},{text:"ヲ",code:"wo"},
        {text:"ガ",code:"ga"},{text:"ギ",code:"gi"},{text:"グ",code:"gu"},{text:"ゲ",code:"ge"},{text:"ゴ",code:"go"},
        {text:"ザ",code:"za"},{text:"ジ",code:"ji"},{text:"ズ",code:"zu"},{text:"ゼ",code:"ze"},{text:"ゾ",code:"zo"},
        {text:"ダ",code:"da"},{text:"ヂ",code:"di"},{text:"ヅ",code:"du"},{text:"デ",code:"de"},{text:"ド",code:"do"},
        {text:"バ",code:"ba"},{text:"ビ",code:"bi"},{text:"ブ",code:"bu"},{text:"ベ",code:"be"},{text:"ボ",code:"bo"},
        {text:"パ",code:"pa"},{text:"ピ",code:"pi"},{text:"プ",code:"pu"},{text:"ペ",code:"pe"},{text:"ポ",code:"po"},
        {text:"キャ",code:"kya"},{text:"キュ",code:"kyu"},{text:"キョ",code:"kyo"},
        {text:"シャ",code:"sya"},{text:"シュ",code:"syu"},{text:"ショ",code:"syo"},
        {text:"チャ",code:"cya"},{text:"チュ",code:"cyu"},{text:"チョ",code:"cyo"},
        {text:"ニャ",code:"nya"},{text:"ニュ",code:"nyu"},{text:"ニョ",code:"nyo"},
        {text:"ヒャ",code:"hya"},{text:"ヒョ",code:"hyu"},{text:"ヒョ",code:"hyo"},
        {text:"ミャ",code:"mya"},{text:"ミュ",code:"myu"},{text:"ミョ",code:"myo"},
        {text:"リャ",code:"rya"},{text:"リュ",code:"ryu"},{text:"リョ",code:"ryo"},
        {text:"ギャ",code:"gya"},{text:"ギュ",code:"gyu"},{text:"ギョ",code:"gyo"},
        {text:"ジャ",code:"ja",code2:"jya"},{text:"ジュ",code:"ju",code2:"jyu"},{text:"ジョ",code:"jo",code2:"jyo"},
        {text:"ビャ",code:"bya"},{text:"ビュ",code:"byu"},{text:"ビョ",code:"byo"},
        {text:"ピャ",code:"pya"},{text:"ピュ",code:"pyu"},{text:"ピョ",code:"pyo"}
    ]
}

var min=0;
var max=45;
var jType="pingText";

PIXI.loader
    .add('dragon', './res/spine/dragon.json')
    .add('goblin', './res/spine/goblins.json')
    .add("pixie",'./res/spine/Pixie.json')
    .add("spineboy",'./res/spine/spineboy.json')
    .add('spritesheet', './res/mc.json')
    .add("bg","./res/BG1.png")
    .add("start","./res/start.png")
    .add("options","./res/options.png")
    .add("left","./res/life_128.png")
    .load(onAssetsLoaded);

var explosionTextures=[];
var allLoader=null;
var lifeCount=3;
var lifeValue=3;
var lifeStage;

var score=0;
var maxScore=100;
var scoreSprite;

var isGamePlaying=false;
var isGamePause=false;
var isNeedRomanCode=false;

var mTypes=["dragon","goblin","pixie","spineboy","dragon","goblin","pixie","spineboy","life"];
var monsters=[];
var monsterCount=4;
var monsterId=0;

var keyCode="";

var messageSprite;
var background;
var start,options;

//stage.interactive = true;

function onAssetsLoaded(loader,res){
    allLoader=loader;

    for(var i=0;i<26;i++){
        var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i+1) + '.png');
        explosionTextures.push(texture);
    }

    initBackground();
    initStart();
    initLift();
    initScore();
    initMessage();
    initEvents();


    $(window).on("keydown",function(evemt){


        if(!isGamePlaying) return;

        if(evemt.key==="Escape"){
            if(!isGamePause){
                isGamePause=true;
                monsters.map(function(m){
                    m.tween.pause();
                })
            }
            else{
                isGamePause=false;
                monsters.map(function(m){
                    m.tween.play();
                })
            }
        }else{
            keyCode+=evemt.key;

            for(var i=0;i<monsters.length;i++){
                var m=monsters[i];
                if(keyCode.toLocaleLowerCase().match(m.textCode)||keyCode.toLocaleLowerCase().match(m.textCode2)){
                    var id = m.die();
                    delMonster(id);
                    keyCode="";
                    addScore();
                }
            }
        }
    });

    animate();
}

function readIt(text,code){

    if(audios[code]&&isGamePlaying) audios[code].play();

/*    if(voices!==null){
        var msg = new SpeechSynthesisUtterance(text);
        msg.lang='ja';
        msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google 日本語'; })[0];
        speechSynthesis.speak(msg);
    }*/

}

function initEvents(){
    $optionsClear.on("click",function(){
        $options.hide();
    })
    $optionsOkey.on("click",function(){
        min=$texts.find("option:selected").data("min");
        max=$texts.find("option:selected").data("max");
        jType=$texts.find("option:selected").data("type");
        $options.hide();
    })

    $needRoman.on("change",function(){
        isNeedRomanCode=!isNeedRomanCode;
    })
}

function initBackground(){
    background=PIXI.Sprite.fromImage("./res/BG1.png");

    background.scale.x=renderer.width/background.width;
    background.scale.y=renderer.height/background.height;
    stage.addChild(background);
}
function initStart(){
    start = PIXI.Sprite.fromImage("./res/start.png");
    start.anchor.x=0.5;
    start.anchor.y=0.5;
    start.position.x=renderer.width/2;
    start.position.y=renderer.height/3*2;
    start.interactive=true;
    stage.addChild(start);
    start.on("mousedown",function(){
        resetGame();
    });

    options = PIXI.Sprite.fromImage("./res/options.png");
    options.anchor.x=0.5;
    options.anchor.y=0.5;
    options.position.x=renderer.width/2;
    options.position.y=renderer.height/5*4;
    options.interactive=true;
    stage.addChild(options);
    options.on("mousedown",function(){
        $options.show();
    })


}
function initLift(){
    lifeStage=new PIXI.Container();
    stage.addChild(lifeStage);

    for(var i=0;i<lifeCount;i++){
        var ls=PIXI.Sprite.fromImage("./res/life_128.png");
        ls.position.y=0;
        ls.position.x=i*ls.width;
        lifeStage.addChild(ls);
    }
}
function initScore(){
    var scoreStage=new PIXI.Container();
    stage.addChild(scoreStage);

    var style={fontSize : '50px',fill:"#ffffff"};
    var textSprite=new PIXI.Text("得分：",style);
    scoreSprite=new PIXI.Text(score+"",style);
    var maxScoreSprite=new PIXI.Text("/"+maxScore,style);

    textSprite.position.set(renderer.width/2-150,25);
    scoreSprite.position.set(renderer.width/2,25);
    maxScoreSprite.position.set(renderer.width/2+90,25);

    scoreStage.addChild(scoreSprite);
    scoreStage.addChild(maxScoreSprite);
    scoreStage.addChild(textSprite);
}
function initMessage(){
    messageSprite=new PIXI.Text("YouWin",{fill:"#ffffff",fontSize:"100px"});
    messageSprite.anchor.x=0.5;
    messageSprite.anchor.y=0.5;
    messageSprite.position.x=renderer.width/2;
    messageSprite.position.y=renderer.height/2;
    stage.addChild(messageSprite);
    messageSprite.alpha=0;
}

function animate() {
    requestAnimationFrame(animate);

    if(isGamePlaying){
        needMonster();
    }
    renderer.render(stage);
}

function createDragon(){
    if(!allLoader) return;

    var dragon = new PIXI.spine.Spine(allLoader.resources.dragon.spineData);
    dragon.scale.set(0.3);
    dragon.state.setAnimation(0, 'flying', true);
    //dragon.anchor.set(0.5,0.5);

    return dragon;
}
function createGoblin(){
    if(!allLoader) return;

    var goblin=new PIXI.spine.Spine(allLoader.resources.goblin.spineData);
    goblin.skeleton.setSkinByName('goblin');
    goblin.scale.set(0.5);
    goblin.state.setAnimation(0, 'walk', true);
    //goblin.anchor.set(0.5,0.5);

    return goblin
}
function createPixie(){
    if(!allLoader) return;

    var pixie = new PIXI.spine.Spine(allLoader.resources.pixie.spineData);
    pixie.scale.set(0.2);
    pixie.state.setAnimation(0, 'running', true);
    //pixie.anchor.set(0.5,0.5);

    return pixie;
}
function createSpineBoy(){
    if(!allLoader) return;

    var spineBoy=new PIXI.spine.Spine(allLoader.resources.spineboy.spineData);
    spineBoy.scale.set(0.5);
    spineBoy.state.setAnimation(0, 'walk', true);
    //spineBoy.anchor.set(0.5,0.5);

    return spineBoy;
}
function createMLife(){
    if(!allLoader) return;

    var lifeSprite=PIXI.Sprite.fromImage("./res/life_128.png");
    lifeSprite.anchor.set(0.5,1);
    return lifeSprite;
}

function needMonster(){
    if(monsters.length<monsterCount){
        var needMonsterCount=monsterCount-monsters.length;
        console.log(needMonsterCount);
        for(var i=0;i<needMonsterCount;i++){
            monsters.push(new Monster(mTypes[Math.floor(Math.random()*mTypes.length)]));
        }
    }
}
function delMonster(id){
    for(var i=0;i<monsters.length;i++){
        if(id===monsters[i].id){
            var tmp=monsters[0];
            monsters[0]=monsters[i]
            monsters[i]=tmp;
        }
    }
    monsters.shift();
}

function Monster(type){
    var _this=this;
    this.id=monsterId;
    monsterId++;

    this.type=type;

    var textScale=1;

    switch(type){
        case "dragon":{
            this.y=100+Math.random()*(renderer.height-200);
            this.spine=createDragon();
            textScale=4;
            break;
        }
        case "goblin":{
            this.y=450+Math.random()*(renderer.height-500);
            this.spine=createGoblin();
            textScale=1.5;
            break;
        }
        case "pixie":{
            this.y=450+Math.random()*(renderer.height-500);
            this.spine = createPixie();
            textScale=4;
            break;
        }
        case "spineboy":{
            this.y=450+Math.random()*(renderer.height-500);
            this.spine = createSpineBoy();
            textScale=2;
            break;
        }
        case "life":{
            this.y=100+Math.random()*(renderer.height-200);
            this.spine=createMLife();
            break;
        }
    }

    this.x=0;
    this.spine.zIndex=this.y;

    var textObj=Japanese[jType][min+Math.floor(Math.random()*(max-min))];
    var style={
        fontSize : '36px',
        fontWeight : 'bold',
        fill : '#F7EDCA',
        stroke : '#4a1850',
        strokeThickness : 5,
        dropShadow : true,
        dropShadowColor : '#000000',
        dropShadowAngle : Math.PI / 6,
        dropShadowDistance : 6,
        wordWrap : true,
        wordWrapWidth : 440
    }
    var style2={
        fontSize : '36px',
        fontWeight : 'bold',
        fill : '#000000',
        stroke : '#F7EDCA',
        strokeThickness : 5,
        dropShadow : true,
        dropShadowColor : '#4a1850',
        dropShadowAngle : Math.PI / 6,
        dropShadowDistance : 6,
        wordWrap : true,
        wordWrapWidth : 440
    }

    //打印假名
    this.rText=textObj.text;
    this.text=new PIXI.Text(textObj.text,style);
    this.text.zIndex=this.y+1;
    this.text.anchor.set(0.5,0);

    this.textCode=textObj.code;
    this.textCode2=textObj.code2?textObj.code2:"------------------------------------------------------";

    //打印罗马音
    this.codeSprite=new PIXI.Text(textObj.code,style2);
    this.codeSprite.zIndex=this.y+2;
    this.codeSprite.position.y=-100;
    this.codeSprite.anchor.set(0.5,1);

    //this.text.scale.set(1-this.spine.scale.x);

    this.dieAni = new PIXI.extras.AnimatedSprite(explosionTextures);
    this.dieAni.loop=false;
    this.dieAni.anchor.x=0.5;
    this.dieAni.anchor.y=0.5;
    this.dieAni.rotation=Math.random()*Math.PI;
    this.dieAni.scale.set(0.75 + Math.random() * 0.5);
    this.dieAni.onComplete=function(){
        _this.dieAni.alpha=0;
    }

    this.spine.addChild(this.text);
    this.text.scale.set(textScale);
    this.codeSprite.scale.set(textScale);

    if(isNeedRomanCode)
        this.spine.addChild(this.codeSprite)

    stage.addChild(this.spine);

    this.tween=TweenLite.to(this, 10+Math.random()*20, {
        x:renderer.width,
        onUpdate:function(){
            _this.moving()
        },
        onComplete:function(){
            var id = _this.die();
            delMonster(id);
            Ouch();
        }
    })
}
Monster.prototype.moving= function () {
    this.spine.position.set(this.x,this.y);
}
Monster.prototype.die=function(){

    readIt(this.rText,this.textCode);

    this.dieAni.position.x=this.spine.position.x;
    this.dieAni.position.y=this.spine.position.y;
    this.spine.destroy();
    this.text.destroy();
    this.codeSprite.destroy();
    this.dieAni.play();
    stage.addChild(this.dieAni);
    this.tween.kill();

    if(this.type==="life"){
        OhYear();
    }

    return this.id;

    //delMonster(this.id);
}

//增加分数
function addScore(){
    if(!isGamePlaying) return;

    score++;
    if(score<maxScore)
        scoreSprite.text = score+"";
    else{
        score=0;
        scoreSprite.text = maxScore;
        messageSprite.text = "You Win";
        messageSprite.alpha=1;
        isGamePlaying=false;
        start.visible=true;
        options.visible=true;
        clearMonster();
    }
}
//损失生命
function Ouch(){
    if(!isGamePlaying) return;

    lifeStage.children[lifeValue-1].alpha=0;
    lifeValue--;

    if(lifeValue==0)
    {
        lifeValue=3;
        messageSprite.text = "You Lose";
        messageSprite.alpha=1;
        isGamePlaying=false;
        start.visible=true;
        options.visible=true;
        score=0;

        clearMonster();
    }
}
//恢复生命
function OhYear(){
    if(!isGamePlaying) return;

    lifeValue++;
    if(lifeValue>=lifeCount)
        lifeValue=lifeCount;

    lifeStage.children[lifeValue-1].alpha=1;
}

function clearMonster(){
    //monsters.map(function(m){
        //m.die();
    //});
    for(var i=0;i<monsters.length;i++){
        monsters[i].die();
    }

    monsters=[];
}

function resetGame(){
    start.visible=false;
    options.visible=false;
    isGamePlaying=true;
    messageSprite.alpha=0;

    scoreSprite.text = score+"";
    lifeStage.children.map(function(l){
        l.alpha=1;
    });
}