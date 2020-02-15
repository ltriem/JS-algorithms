// map.js
// Реализуйте и экспортируйте набор функций, для работы со словарём, построенным на хеш-таблице. Для простоты, наша реализация не поддерживает разрешение коллизий.

// make() — создаёт новый словарь
// set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для создания и для изменения. Функция возвращает true, если удалось установить значение. При возникновении коллизии, функция никак не меняет словарь и возвращает false.
// get(map, key, defaultValue = null) — читает в словаре значение по ключу. Параметр defaultValue — значение, которое функция возвращает, если в словаре нет ключа (по умолчанию равно null).
// Функции set и get принимают первым параметром словарь. Передача идёт по ссылке, поэтому set может изменить его напрямую.

import crc32 from 'crc-32';

const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;
const make = () => [];

const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index]) {
    const [currentKey] = map[index];
    if (currentKey !== key) {
      return false;
    }
  }
  map[index] = [key, value];

  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index]) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

export { make, set, get }; 