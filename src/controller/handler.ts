import telebot from "telebot";

/* 
 * Handlers - Application handler class.
 * Used to define event handlers.
 */
export class Handler {
    private name?: string // The name of handler
    private bot: telebot // undefined??

    constructor(name: string, bot: telebot){
        this.bot = bot
        this.name = name
        
        console.log(`Handler: ${this.name} is initialized!`)
    }

    public greetings(msg: any) {

        console.log(this.bot)
        let id = msg.from.id
        let text = msg.text
        this.bot.sendMessage(id, `You said: ${ text }`);
    }

    public end(msg: any): void {
        msg.reply.text("Bay(")
    }
}