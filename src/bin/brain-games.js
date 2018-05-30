#!/usr/bin/env node

import {getuserName, welcomeUser} from '..';

console.log('Welcome to the Brain Games!');
welcomeUser(getuserName());
