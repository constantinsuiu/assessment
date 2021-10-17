import merge from 'deepmerge'
import { wdioConf } from 'wdio.conf.js'
import { uiConf } from './configs/base.conf.js'


const conf = merge(wdioConf, uiConf);
console.log(conf)
