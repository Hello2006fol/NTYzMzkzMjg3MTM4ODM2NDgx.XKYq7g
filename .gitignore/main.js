const Discord = require('discord.js');
const client = new Discord.Client();
const go = require('./go.js');
// https://discordapp.com/oauth2/authorize?client_id=557222153045540865&scope=bot&permissions=8
var prefix = process.env.PREFIX

client.on('ready', function(){
	console.log("Je suis connecte");
	client.user.setActivity("&help", {type : "WATCHING"});
});

client.on('guildCreate', function(guild){
	var joinEmbed = new Discord.RichEmbed()
	.setTitle("J'ai rejoint un nouveau serveur !")
	.setColor("#37FF00")
	.addField("Nom du serveur : ", guild.name)
	.addField("Membres sur le serveur :", guild.memberCount)
    .addField("Proprietaire du serveur", guild.owner.user.username)
	.addField("Nombre de serveurs :", client.guilds.size);
	client.channels.get('562919348864548884')
	.send(joinEmbed);
	client.channels.get('562321426250727424')
	.send(joinEmbed);
});

client.on('guildDelete', function(guild){
	var leaveEmbed = new Discord.RichEmbed()
	.setTitle("J'ai quitte un serveur !")
	.setColor("#FF1D00")
	.addField("Nom du serveur : ", guild.name)
	.addField("Membres sur le serveur :", guild.memberCount)
    .addField("Proprietaire du serveur : ", guild.owner.user.username)
	.addField("Nombre de serveurs :", client.guilds.size);
	client.channels.get('562919348864548884')
	.send(leaveEmbed);
	client.channels.get('562321426250727424')
	.send(leaveEmbed);
});

client.on('message', function(message, guild){
	//verification
	if(!message.content.startsWith(prefix)) return;
	if(!message.guild) return;
	if(message.author.bot) return;
	//arguments
	const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	//demarrage des commandes
	if(message.content.startsWith(prefix)) {
		go.go(message, client, guild);
	}
});

client.login(process.env.TOKEN);
