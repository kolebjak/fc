/**
 * Usage
 *
 * compose(fc1, fc2, ...)(input)
 * 
 * @param functions
 */
export const compose = (...functions: ((...input: any[]) => any)[]) => functions.reduce((f, fn) => (...args: any[]) => f(fn(...args)));

/**
 * Usage
 *
 * compose(
 *    when(shouldRunFc1, fc1),
 *    when(shouldRunFc2, fc2),
 *    when(shouldRunFc3, fc3)
 * )(input);
 *
 *
 * @param cond
 * @param f
 */
export const when = (cond: boolean, f: any) => (x: any) => (cond ? f(x) : x);

