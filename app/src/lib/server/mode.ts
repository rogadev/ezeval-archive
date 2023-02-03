import { env } from '$env/dynamic/public';
const inDev: boolean = env.NODE_ENV !== 'production';
export default inDev;