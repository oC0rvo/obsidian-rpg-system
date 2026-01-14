import { version } from "react";

export const SYSTEM_INFO={
    systemName:"Obsidian RPG System",
    schemaVersion:"1.0.0",
    createdAt:null,
    lastUpdate:null
};

const systemTemplate = () => ({
    id:crypto.randomUUID(),
    schemaVersion:SYSTEM_INFO.schemaVersion,
    createdAt : new Date().toISOString,
    updatedAt: new Date().toISOString,
    locked: false,
    flags:{}
});

const metadataTemplate= () =>({
    version:1,
    history:[],
    tags:[],
    warnings:[],
});

const identityTemplate= () => ({
    name:"",
    player:"",
    campaing:"",
    origin:"",
    level:1,
    portrait:null,
    description:"",
});

const attributesTemplates = () =>({
    primary:{},  
    secondary:{}, 
    temporary:{},
});

const resourcesTemplates = () =>({
    life:{current:0,max:0},
    sanity:{current:0,max:0},
    energy:{current:0,max:0},
    custom:{}
});

const skillsTemplates =() =>({
    categories:{},
    values:{},
    modifers:{}
});

const combatTemplate = () =>({
    initiative:0,
    defense:0,
    resistences:{},
    attacks:[],
    movement:0,
    status:{}
});

const inventoryTemplate = () =>({
    capacity:null,
    money:{},
    items:[],
    equipment:{}
});
const abilitiesTemplate = () =>({
    passives:[],
    actives:[],
    rituals:[],
    cooldowns:[]
});

const conditionsTemplate=() =>({
    states:[],
    effects:[],
    temporaryModifiers:[]
});

const progressionTemplate = () =>({
    experience:0,
    milestones:[],
    upgrade:[],
});
const notesTemplates = () =>({
    public:"",
    private:"",
    master:""
});

/*
================================= 
    Template De Personagem
=================================
*/

const characterTemplate = () =>({
    system:systemTemplate(),
    metadata:metadataTemplate(),
    identity:identityTemplate(),
    attributes:attributesTemplates(),
    resources:resourcesTemplates(),
    skills:skillsTemplates(),
    combat:combatTemplate(),
    inventory:inventoryTemplate(),
    abilities:abilitiesTemplate(),
    conditions:conditionsTemplate(),
    progression:progressionTemplate(),
    notes:notesTemplates(),
});

/*
==============================
    STATES MACHINE
==============================
*/ 

export function createEmptyCharacter(){
    return characterTemplate();
};

export function cloneCharacter(characterState){
    return structuredClone(characterState);
};

export function createCharacterFromData(data){
    return{
        ...characterTemplate(),
        ...data,
        system:{
            ...systemTemplate(),
            ...(data.system||{})
        }
    };
}