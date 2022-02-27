import telebot from "telebot";
import { IHandler } from "./types/types";
/* 
 * Events - Application event class. 
 * Used to define events and assign handlers to them.
 */
export class Events {
    private bot: telebot
    private handlers: IHandler

    constructor(bot: telebot, handlers: IHandler){
        this.bot = bot
        this.handlers = handlers
    }

    init(): void{
        this.greetings()
        this.end()
    }

    public greetings(): void {
        this.bot.on("text", this.handlers.greetings)
    }

    public end(): void {
        this.bot.on("/end", this.handlers.end)
    }

}