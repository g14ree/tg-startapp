import Telebot from "telebot";
import { Token } from "./types/types";
import { Handler } from "./controller/handler";
import { Events } from "./controller/events";


const TOKEN: Token | undefined = process.env.TG_TOKEN

/* 
 App - Application class
*/
class App {
    private token: Token // Telegram bot token
    private bot?: Telebot // Telegram bot
    private handler?: Handler
    private events?: Events

    constructor(token: Token){
        this.token = token
    }


    // init - Application initialization. Telegram bot is initialized in this method.
    public init(): void {
        if(this.token && this.bot == undefined){
            this.bot = new Telebot(this.token)

            this.handler = new Handler("User", this.bot)
            this.events = new Events(this.bot, this.handler)
            this.events.init()

            console.log("Bot is initialized successfully!")

        } else throw "Err: Token is undefined!"

    }

    // start - Application launch. This method starts the telegram bot.
    public start(): void {
        if(this.bot){
            if(this.bot) {
                this.bot.start()
                
                console.log("Bot is launched...")
    
            } else throw "Err: Bot is't initialized!"    
        }
    }
}

const app = new App(TOKEN!);
app.init()
app.start()
