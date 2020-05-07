import dotenv from 'dotenv';
dotenv.config();
import { Bot } from './Bot.js';

const bot = new Bot();
bot.makeRunes();
