// https://sevruk04.kaiten.ru/space/169929/card/22006723

export const pick = (obj, keys) => {
  // Тут должно быть твое решение. Успехов =)
  const ret = {}

  for (const key of keys) {
    //hasOwnProperty - смотрит есть ли конкретное свойство у обьекта
    if (obj.hasOwnProperty(key)) {
      ret[key] = obj[key]
    }
  }
  return ret
}
