const CharacterIdle = ["jinn_animation/Flight1.png", "jinn_animation/Flight2.png", "jinn_animation/Flight3.png", "jinn_animation/Flight4.png"]
const CharacterAttack = ["jinn_animation/Attack1.png", "jinn_animation/Attack2.png", "jinn_animation/Attack3.png", "jinn_animation/Attack4.png"]
const MagAttack = ["jinn_animation/Magic_Attack1.png", "jinn_animation/Magic_Attack2.png", "jinn_animation/Magic_Attack3.png", "jinn_animation/Magic_Attack4.png", "jinn_animation/Magic_Attack5.png", "jinn_animation/Magic_Attack6.png", "jinn_animation/Magic_Attack7.png", "jinn_animation/Magic_Attack8.png", "jinn_animation/Magic_Attack9.png", "jinn_animation/Magic_Attack10.png", "jinn_animation/Magic_Attack11.png", "jinn_animation/Magic_Attack22.png", "jinn_animation/Magic_Attack23.png"]
const Enemies = ["gost/Wraith_01_Moving Forward_000.png", "gost/Wraith_01_Moving Forward_001.png", "gost/Wraith_01_Moving Forward_002.png", "gost/Wraith_01_Moving Forward_003.png", "gost/Wraith_01_Moving Forward_004.png", "gost/Wraith_01_Moving Forward_005.png", "gost/Wraith_01_Moving Forward_006.png", "gost/Wraith_01_Moving Forward_007.png"]
const EnemyDies = ["gost/die/Wraith_01_Dying_007.png", "gost/die/Wraith_01_Dying_008.png", "gost/die/Wraith_01_Dying_009.png", "gost/die/Wraith_01_Dying_010.png", "gost/die/Wraith_01_Dying_011.png"]
const characterDies = ["jinn_animation/Death1.png", "jinn_animation/Death2.png", "jinn_animation/Death3.png", "jinn_animation/Death4.png", "jinn_animation/Death5.png", "jinn_animation/Death6.png"]



export const options = {

    idle:
    {
        ImagesArr: CharacterIdle,
    },

    attack: {
        ImagesArr: CharacterAttack,
    },

    magAttack: {
        ImagesArr: MagAttack,
    },

    enemies: {
        ImagesArr: Enemies,
    },

    enemyDies: {
        ImagesArr: EnemyDies,
    },

    characterDies: {
        ImagesArr: characterDies,
    }
}