const CharacterIdle = ["jinn_animation/Idle1.webp", "jinn_animation/Idle2.webp", "jinn_animation/Idle3.webp"]
const CharacterAttack = ["jinn_animation/Attack1.webp", "jinn_animation/Attack2.webp", "jinn_animation/Attack3.webp", "jinn_animation/Attack4.webp"]
const MagAttack = ["jinn_animation/Magic_Attack1.webp", "jinn_animation/Magic_Attack2.webp", "jinn_animation/Magic_Attack3.webp", "jinn_animation/Magic_Attack4.webp", "jinn_animation/Magic_Attack5.webp", "jinn_animation/Magic_Attack6.webp", "jinn_animation/Magic_Attack7.webp", "jinn_animation/Magic_Attack8.webp", "jinn_animation/Magic_Attack9.webp", "jinn_animation/Magic_Attack10.webp", "jinn_animation/Magic_Attack11.webp", "jinn_animation/Magic_Attack22.webp", "jinn_animation/Magic_Attack23.webp"]
const Enemies = ["gost/Wraith_01_Moving Forward_000.webp", "gost/Wraith_01_Moving Forward_001.webp", "gost/Wraith_01_Moving Forward_002.webp", "gost/Wraith_01_Moving Forward_003.webp", "gost/Wraith_01_Moving Forward_004.webp", "gost/Wraith_01_Moving Forward_005.webp", "gost/Wraith_01_Moving Forward_006.webp", "gost/Wraith_01_Moving Forward_007.webp"]
const EnemyDies = ["gost/die/Wraith_01_Dying_007.webp", "gost/die/Wraith_01_Dying_008.webp", "gost/die/Wraith_01_Dying_009.webp", "gost/die/Wraith_01_Dying_010.webp", "gost/die/Wraith_01_Dying_011.webp"]
const characterDies = ["jinn_animation/Death1.webp", "jinn_animation/Death2.webp", "jinn_animation/Death3.webp", "jinn_animation/Death4.webp", "jinn_animation/Death5.webp", "jinn_animation/Death6.webp"]



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