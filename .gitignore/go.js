const ping = require('./commands/ping.js');
const clear = require('./commands/clear.js');
const ban = require('./commands/ban.js');
const kick = require('./commands/kick.js');
const joy = require('./commands/joy.js');
const salut = require('./commands/salut.js');
const say = require('./commands/say.js');
const sondage = require('./commands/sondage.js');
const conseil = require('./commands/conseil.js');
const serveur = require('./commands/serveur.js');
const invite = require('./commands/invite.js');
const help = require('./commands/help.js');
var prefix = process.env.PREFIX
module.exports = {
	go: function(message, client, guild) {
		if(message.content === prefix + "ping") {
			ping.ping(message);
		}
		if(message.content.startsWith(prefix + "clear")) {
			clear.clear(message);
		}
		if(message.content.startsWith(prefix + "ban")) {
			ban.ban(message);
		}
		if(message.content.startsWith(prefix + "kick")) {
			kick.kick(message);
		}
		if(message.content.startsWith(prefix + "say")) {
			say.say(message);
		}
		if(message.content.startsWith(prefix + "salut")) {
			salut.salut(message);
		}
		if(message.content.startsWith(prefix + "joy")) {
			joy.joy(message);
		}
		if(message.content.startsWith(prefix + "sondage")) {
			sondage.sondage(message);
		}
		if(message.content.startsWith(prefix + "conseil")) {
			conseil.conseil(message, guild, client);
		}
		if(message.content.startsWith(prefix + "serveur")){
			serveur.serveur(message);
		}
		if(message.content.startsWith(prefix + "invite")){
			invite.invite(message);
		}
		if(message.content.startsWith(prefix + "help")){
			help.help(message, client);
		}
	} 
}
