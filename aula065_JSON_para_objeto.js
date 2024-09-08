const canal={
    nomecanal:"CFBCursos",
    videos: {
        aula1: 'js',
        aula2: 'pyton',
        aula3: 'php',
    },
}

console.log(canal)

const json_canal = JSON.stringify(canal) //transforma um obj em um json
const obj_canal = JSON.parse(json_canal) //transforma um json em um obj

console.log(json_canal)

console.log(typeof(json_canal))
console.log(typeof(obj_canal))
