type ObjectKeys<T> = (keyof T)[];

const getObjectKeys = <T>(obj: T): ObjectKeys<T> => Object.keys(obj) as ObjectKeys<T>;

export default getObjectKeys;
export { ObjectKeys };
