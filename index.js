const chalk = require("chalk");
let config = require('./config.json')
let prefix = config.prefix

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hamo'));

app.listen(port, () => console.log(`Hamo Is Here port = ${port}`));
//packaging

const { Client, Collection , MessageActionRow , MessageButton , MessageSelectMenu , Modal , TextInputComponent , MessageEmbed } = require("discord.js");
let db = require('pro.db')

//VARS

const applycategory = "1177925067238293555";

const line = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&"
const lineof = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&"
const linetr = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&"
const linegi = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&"
const linene = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&"
const linesu = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&"
const linefe = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&"
const wel = "https://cdn.discordapp.com/attachments/1088177906217394319/1177980907399938128/Media_230831_223516-2-1-1.gif?ex=65747b36&is=65620636&hm=74d364a8f70673606a22e8726bb4644da3da4aacaecd5d0e08a04af31674742a&e0bc04c3b76f&"
const offersroom = "1177909634074431558"
const logroom = "1177911106770063411"
const feedbackroom = "1177907749024186389"
const teamrole = "1177907608443703319"
let sugchannel = ""
let fedchannel = "1177907749024186389"
let ordercategory = "1177907722503585833"
var netflixrole = ""
var instarole = ""
var nitrorole = ""
var visarole = ""
var botrole = ""
var ucrole = ""
var voterole = ""
var boostrole = ""
var spotifyrole = ""
var shahidrole = ""
var creditrole = ""
var tiktokrole = ""
var taxchannel = "1177907750219567145"
var welcome = ""
let order = "1177907722503585833"
let applyteam = ""
let yes = "✅"
let no = "❌"
let tag = "DM | "
let link = "https://discord.com/invite/f8Mgjyeja4"
let upgraderoom = "1177994043658084422"
let welcomesellerroom = "1177994093511594064"
let co = "#3498DB"
let newsteam = "1177994248021364797"
let rulesteam = "1177994190311936010"
let trans1 = "1177907772042526762"
let trans2 = ""
let trans3 = ""

const client = new Client({
  intents: 32767
}).setMaxListeners(0);
/*client.on('guildCreate', async(guild) => {
  if(guild.id != "885295158755721329") {
    await guild.leave();*/
  

//
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
//


 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 


client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  message.react("<a:emoji_376:1081885506696122408>")
})

client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  message.channel.send(lineof)
})

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels =["1177951796690423808","1177951796690423808","1177951796690423808"]
  if(!channels.includes(message.channel.id)) return;
  message.channel.send(linene)
})

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels =["1177951796690423808"]
  if(!channels.includes(message.channel.id)) return;
  message.channel.send(lineof)
})

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels =["1177951796690423808","1177951796690423808"]
  if(!channels.includes(message.channel.id)) return;
  message.channel.send(linegi)
})

      client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != "1177951796690423808") return;
        
   
  message.react("<a:33:1147397235496210532>")
})




client.on("channelCreate", async covid => {
if(!covid.name.startsWith("ticket-")) return;
if(covid.parentId != "1177907722503585833") return; {
let members = covid.guild.members.cache.filter(e => !e.user.bot && e.roles.cache.some(e => e.id == "")).forEach(member => {
      if(member.user.bot) return;
member.send(`> ** New Ticket Open <#${covid.id}> **
${member.user}`)
})
}
})

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const targetGuild = client.guilds.cache.find(guild => guild.id === "1142202299868008538");
  const targetChannel = targetGuild.channels.cache.find(channel => channel.id === "1177951796690423808");
  const connection = joinVoiceChannel({
    channelId: targetChannel.id,
    guildId: targetGuild.id,
    adapterCreator: targetGuild.voiceAdapterCreator,
  });
});

					 
client.on("messageCreate", async message => {
if(message.content === "$wait") {
    message.delete()
    message.channel.send(`**سلاوبەرێز تکایە چەوەروان بە تاکوو کریار یا فرۆشیار دیت، ئەم تکتە بۆ مەوەی ٦٠ خولەک کرەوەیە ئەگەرنە رەش دەکریتەوە. سوپەس بۆ سرفانی کردنمان


Hello Sir, Please Wait Until Seller Or Buyer Comes, This Ticket Will Be Left Open For 60 Minutes, After We Will Delete This Ticket. Thank You For Cooming To DM SATFF*`)
}
 })

client.on("messageCreate", async message => {
  if (message.content == ("Link") || message.content === "link") {

message.channel.send(`**>  <:Dli:1147502329638178877> بانگهێشتی لینکی سێرڤەر بکە 
>    { https://discord.com/invite/EjK8SugerH<:mwah:1147502777694691460> } 
**`)
}
  })

client.on("messageCreate", async message => {
  if(message.content === "Line" || message.content === "line" || message.content === "LINE") {
    message.delete();
    message.channel.send(line)
  }})




client.on("messageCreate", async message => {
 if(message.content === "$fb" || message.content === "Fb") {
    message.channel.send(`
**
 Thanks For Using DM Staff, Your Opinion Really Matters To Us Please Give Your Feedback To ${message.author}

 سوپاس بۆ هەلبژەردنی بارزانی ستاف، تکایە فیدباک بدا بەو کەسە 
 ${message.author}
----------------------------------------------


Here :
 <#${fedchannel}>
 **
 `)
  }
    
})


  client.on("messageCreate" ,async message => { if(message.content.startsWith("$come")) {


      const user = message.mentions.users.first()
      if(!user) return message.channel.send("**Mention a user**")
      const args = message.content.split(" ").slice(2).join(" ");

      user.send(`**> <:004:1164611343895244900> | Sorry For Disturbance
>  | Channel : ${message.channel}
> <:emoji22:1148440833280979094> | Your Request By : ${message.guild.members.cache.get(message.author.id).displayName || message.author.tag}
> <:emoji22:1148440833280979094> | Channel | Server Link : https://discord.com/invite/zfqtEjNFzU 
        **`)
      message.channel.send(`> Done Sent Message ✅`)
    }
})

  
client.on("messageCreate", async message => {
  if (message.content === "$ban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if (!user) return message.reply(`** 😕 Please mention or id **`);
    if (user.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

    if (!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => { console.log(err) });
    await message.reply(`✅ **${user.user.tag} banned from the server!**✈️`);
  }//unban

})


client.on("messageCreate", async message => {
  if (message.content === "unban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let args = message.content.split(' ')
    let id = args[1];
    if (!id) return message.reply(`** 😕 Please mention or id **`);
    if (isNaN(id)) {
      return message.reply(`** 😕 Please mention or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(`✅ ** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
})



client.on("messageCreate", async message => {
  if (message.content === "$unbanall") {

    if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 You don't have permission **`);

    const serverban = client.guilds.cache.get(message.guild.id)
    message.guild.bans.fetch().then(bans => {
      bans.forEach(ban => {
        serverban.members.unban(ban.user.id)
      })
    }).then(() => {
      message.reply({ content: `> ** Done __Unbanned__ All Banlist **` })
    })
    }
  

  })


client.on("messageCreate", async message => {
  if (message.content === "$kick") {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let id = message.content.split(' ').slice(1).join(' ')
    let user = message.mentions.members.first() || message.guild.members.cache.get(id)
    if (!user) return message.reply(`** 😕 Please mention or id **`)
    if (user.roles.highest.position > message.guild.members.resolve(message.author).roles.highest.position) return
    message.reply(`** ❌ You can't ban this user **`)
    if (user.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ You can't ban this user **`)
    user.kick().then(() => message.reply(`**✅ @${user.user.username} kicked from the server!**`)).catch(err => message.reply(err))
  }

  })


client.on("messageCreate", async message => {
  if (message.content === "$lock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: false
    }).then(() => {
      message.reply(`**🔒 ${message.channel} has been looked.** `)
    })
  }
  })


client.on("messageCreate", async message => {
  if (message.content === "$unlock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      message.reply(`**🔓 ${message.channel} has been unlooked.** `)
    })
  }
  })



client.on("messageCreate", async message => {
  if(message.content === "$lockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: false
      });
    });
    message.reply("> ** Done __locked__ All Server Channels**")
  }

  })



client.on("messageCreate", async message => {
  if (message.content === "$unlockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: true
      });
    });
    message.reply("> ** Done __Unlocked__ All Server Channels**")
  }
  })




client.on("messageCreate", async message => {
  if(message.content === "$show") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      message.reply(`**✅ ${message.channel} Done show this room.**`)
    })
  }
  })


client.on("messageCreate", async message => {
  if (message.content === "$hide") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      message.reply(`**✅ ${message.channel} Done hide this room.**`)
    })
  }
  })



client.on("messageCreate", async message => {
  if (message.content === "$showall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: true
      });
    });
    message.reply("> ** Done __Showed__ All Server Channels**")
  }
})


client.on("messageCreate", async message => {
  if (message.content === "$hideall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

     let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: false
      });
    });
    message.reply("> ** Done __Hidedd__ All Server Channels**")
  }
  })



 
  
  

client.on("messageCreate", async message => {
  if (message.content === "$inrole") {
    let role = message.mentions.roles.first()
    if (!role) return message.reply("pls mention role")
    let map = message.guild.roles.cache.get(role.id).members.map(rr => `> **<@${rr.id}> ( ${rr.id} )**`).join("\n")

    message.reply({
      embeds: [
        new MessageEmbed()
          .setTitle(` **Info About \`${role.name}\`**  `)
          .setColor('#7800FF')
          .setDescription(`> **Role Name : **\`${role.name}\`

> **Members Count Have This Role :** \`${message.guild.roles.cache.get(role.id).members.size}\`


✨ **Members :**
${map}


> **Role Is Created At : **\`${moment(role.createdAt).format('DD/MM/YYYY h:mm')} \`

`)
          .setTimestamp()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      ], split: true
    })


  }
  })


client.on("messageCreate", async message => {
  if (message.content === "$ping") {
    message.reply({
      embeds: [
        new MessageEmbed()
          .setDescription(`**
    🏓 Pong 🏓 
    
   Latency is ${message.createdTimestamp - message.createdTimestamp}ms. 
   API Latency is ${Math.round(client.ws.ping)}ms
   Ws Ping Is ${client.ws.ping} **`)
          .setColor('#7800FF')
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      ]
    })
  }
  })

      
client.on("messageCreate", async message => {

  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix + "tax")) return;
  if(!args.endsWith("k") && !args.endsWith("K") && !args.endsWith("m") && !args.endsWith("M") && !args.endsWith("t") && !args.endsWith("T") && isNaN(args)) return message.delete()
    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    else if (args.endsWith("b")) args = args.replace(/M/gi, "") * 10000000;
  else if (args.endsWith("B")) args = args.replace(/M/gi, "") * 10000000;
       let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
    message.channel.send(`
>  **__${tax}__** `)
message.channel.send(line)
   });    




//
//offer
//Re

client.on('messageCreate' , async(message) => {
  if(message.content === "Re") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "Re") {
    if(!message.channel.name.startsWith("need")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})

client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("need")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})


//feedback

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedbackroom) return;
      let role = message.guild.roles.cache.get("1008519344424243243")
    message.member.roles.add(role)
  let user = message.mentions.members.first()
  if(message.author.id == user.id) return;
  let pointSs = db.get(`points_${user.id}`)
  if( pointSs == null) {
      await db.set(`points_${user.id}` , {
    userId : user.id,
    count : 0
  })
  }
  let points = db.get(`points_${user.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (11 * 1))
  await db.set(`points_${user.id}` , {
    userId : user.id,
    count : po
  })
  db.add(`feedback_${user.id}` , 1)
    message.guild.channels.cache.get(logroom).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Offers Feedback Gived To : ${user}

> By Client : ${message.author}`)
  ]})
})
//p



//feedbck
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != fedchannel) return;
  let embed = new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
> Thanks For Giving Us Feedback <:emoji22:1148440833280979094>

> We Hope You Visit Us Again <:004:1164611343895244900>
**
`)
    .setImage(linefe)
    .setColor(co)
  message.reply({embeds: [embed]})
})
//react

client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != fedchannel) return;
  message.react("<a:33:1147397235496210532>")
})
//sug
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != sugchannel) return;
  message.channel.send({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
${message.content}
**
`)
    .setImage(linesu)
    .setColor(co)
  ]}).then(async(m) => {
    m.react(yes)
    m.react(no)
  })
  message.delete()
})

//
client.on('channelCreate', message => {

  if (message.parentId !== ordercategory) return;
  const pricelistembed = new MessageEmbed()
    .setImage(line)
    .setColor(co)
    .setTimestamp()
    .setDescription(`__****ئارامی و نیعمەت و ڕەحمەتی خوای گەورە لەسەرتان بێت..
لە بلیتی داواکارییەکەتدا تیمی **DM SATFF** ـت هەیە.!

تکایە داواکارییەکەت بەتەواوی ڕوون بکەرەوە بۆ ئەوەی بتوانم یارمەتیت بدەم و داواکارییەکە پشتڕاست بکەمەوە، تیمی بابەتەکانتان بۆ دەنێرم بۆ داواکارییەکەت و تکایە چاوەڕێی فرۆشیار بن، ئەگەر لە ئێستادا بەرهەمەکە بەردەست نەبوو ئەوا بلیتەکە دادەخرێت و لە کاتێکی دواتردا بەردەست دەبێت سوپاس بۆ تێگەیشتنتان.** <:mwah:1147502777694691460>**__`)
  })
          

client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number**`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number  **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 **`);
//         let row = new MessageActionRow()
// 			.addComponents(
//         				new MessageButton()
//         .setCustomId(`first_embed`)
//         .setLabel("Mediator")
//         .setEmoji("👮")
//         .setStyle('SUCCESS')
//       );
//       let row2 = new MessageActionRow()
// 			.addComponents(
//         new MessageButton()
//         .setCustomId(`2_embed`)
//         .setLabel("Back")
//         .setEmoji("↩️")
//         .setStyle('DANGER')
// );
        let m = await message.reply({ content: `
> **__${tax}__**` });
//         let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
//         collector.on('collect', async i => {
//           if (i.customId === 'first_embed') {
//                   m.edit({ content: `
// > ** <a:991531048364150854:1039193916521594911> Your Tax Is : __${tax4}__**` })
//                   row
//                   i.deferUpdate()
//           }
//           if (i.customId === '2_embed') {
//           m.edit({ content: `
// > ** <a:ss_4:1006717474819035166> Your Tax Is : __${tax}__**`, components: [row] })
            
//                   i.deferUpdate()
//           } else {
//             return;
//           }
//       });
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "wlcs")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋")
    if (!args) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅 𝖱𝗈𝗅𝖾𝗌")
    client.channels.cache.get(welcomesellerroom).send(`
>  𝖲𝖺𝗒 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 𝖮𝗎𝗋 𝖭𝖾𝗐 𝖲𝖾𝗅𝗅𝖾𝗋 <:mwah:1147502777694691460>


> 𝖲𝖾𝗅𝗅𝖾𝗋 : ${user} <:Dli:1147502329638178877>


> 𝖱𝗈𝗅𝖾𝗌 Team : ${args} <:mwah:1147502777694691460>


> 𝖯𝗅𝗌 𝖱𝖾𝖺𝖽 𝖳𝗁𝖾 𝖱𝗎𝗅𝖾𝗌 𝖡𝖾𝖼𝖺𝗌𝖾 𝖣𝗈𝗇'𝗍 𝖳𝖺𝗄𝖾 𝖶𝖺𝗋𝗇𝗌 <:emoji22:1148440833280979094>


> 𝖳𝗁𝗑 𝖳𝗈 𝖠𝗉𝗉𝗅𝗒 𝖳𝗈 𝖳𝖾𝖺𝗆 ${message.guild.name} <:mwah:1147502777694691460>

> Enjoy <:Dli:1147502329638178877>
`)
    client.channels.cache.get(welcomesellerroom).send({
      embeds: [
        new MessageEmbed()
          .setImage(linefe)
          .setColor(co)
      ]
    })
    message.reply("> 𝖣𝗈𝗇𝖾")
  }
})



client.on("messageCreate", message => {
  
  if (message.content.startsWith("$up")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.members.first()
    let args = message.mentions.roles.first()
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋")
    if (!args) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖱𝗈𝗅𝖾 ")
    user.roles.add(args)
    client.channels.cache.get(upgraderoom).send(`> \`&-\` 𝖲𝖾𝗅𝗅𝖾𝗋 : ${user} <:004:1164611343895244900>


> \`?-\` 𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖳𝗈 : ${args} 
<:Dli:1147502329638178877>

> \`#-\`  𝖪𝖾𝖾𝗉 𝖠𝗇𝖽 𝖳𝗁𝗑 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 ${message.guild.name} <:Dli:1147502329638178877>


> 𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 <:004:1164611343895244900>
`)
    client.channels.cache.get(upgraderoom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(co)
      ]
    })
    const upgradedmembed = new MessageEmbed()
      .setColor(co) 
      .setTimestamp()
      .setDescription(
        `** 
> \`#-\` 𝖧𝖾𝗅𝗅𝗈 ${user} , 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖱𝖾𝖺𝖼𝗁𝖾𝖽 {${args}} <:Dli:1147502329638178877>

> \`?-\` 𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇 : ${user} <:004:1164611343895244900>

> \`%-\` 𝖳𝗁𝗑 𝖥𝗈𝗋 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇${message.guild.name} <:emoji22:1148440833280979094>

 > 𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 <:mwah:1147502777694691460>

`)
      .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖥𝗋𝗈${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
    message.reply("> 𝖣𝗈𝗇𝖾 <:mwah:1147502777694691460>")
  }
})

client.on("messageCreate", msg => {
  if (msg.content === ".") {
    const mrpro = [".?","..?","..?"];
    const rpro = Math.floor(Math.random() * mrpro.length);
    msg.reply({ content: `${mrpro[rpro]}` });
  }
});

let trans = "1177907772042526762"  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans1) return;
  message.channel.send(linetr)
  }})

  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans2) return;
  message.channel.send(linetr)
  
  }})
  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans3) return;
  message.channel.send(linetr)
  
  }})



  








client.on('messageCreate', message => {
  if (message.content ===  '<@1177994915385454633>') {
    message.channel.send(`> Hello ${message.author}
> This Bot Was Developer By Syntex & 

> If You Want To Buy A Bot Like This Message One Of Us`)
    }

})

client.on("messageCreate", message => {
  if(message.content.startsWith('$code')) {
    let words = message.content.split(" ").slice(1).join(" ");
    let words2 = words.replace("account", "ac/oun/t").replace("Account", "ac/oun/t").replace("owo", "0-0").replace("credit", "Cr///dt").replace("bardasta", "b4rd/4sta").replace("tiktok", "ti/k/tok").replace("pubg", "pu/bg").replace("pes", "p/e/s").replace("coin", "c0/in").replace("fastpay", "f4st/p/ay").replace("korek", "k0/rek").replace("asia", "as/ia").replace("zen", "z/e/n").replace("picsart", "pic/s/ar/t").replace("telegram", "tel/eg/ram").replace("facebook", "fac/eboo/k").replace("link", "li/nk").replace("nitro", "ni//tro").replace("gift", "gi/ft").replace("clash", "cla/sh").replace("town", "t0/wn").replace("twitter", "twi/t/er").replace("reaction", "reac/tio/n").replace("react", "rea/ct").replace("fake", "fa/ke").replace("design", "des/ign").replace("logo", "l0/go").replace("member", "mem/ber").replace("online", "onl/ine").replace("offline", "off/li/ne").replace("auto", "au/to").replace("@everyone", "hazt la ban?").replace("@here", "7azt la ban a")
    
    
    
    if (!words) return message.channel.send('Pleas Put Something To Make To Code')
    message.channel.send(`${words2}`)
  }
});

client.on("message", EgyptTeam => {
  if (EgyptTeam.content.startsWith('$font')) {
    let words = EgyptTeam.content.split(" ").slice(1).join(" ");
    let words2 = words.replace("a", "𝐚")// Maximum 10 LetterS In The Single Word
    if (!words) return EgyptTeam.channel.send('وشەیەکم داهێناوە یان چی؟')
    EgyptTeam.channel.send(`${words2}`)
  }
});

//
const wt = "1177907722503585833"

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket") && channel.parentId === wt) {
setTimeout(() => {

channel.send(`__****ئارامی و نیعمەت و ڕەحمەتی خوای گەورە لەسەرتان بێت..
لە بلیتی داواکارییەکەتدا تیمی **DM SATFF** ـت هەیە.!

تکایە داواکارییەکەت بەتەواوی ڕوون بکەرەوە بۆ ئەوەی بتوانم یارمەتیت بدەم و داواکارییەکە پشتڕاست بکەمەوە، تیمی بابەتەکانتان بۆ دەنێرم بۆ داواکارییەکەت و تکایە چاوەڕێی فرۆشیار بن، ئەگەر لە ئێستادا بەرهەمەکە بەردەست نەبوو ئەوا بلیتەکە دادەخرێت و لە کاتێکی دواتردا بەردەست دەبێت سوپاس بۆ تێگەیشتنتان.** <:mwah:1147502777694691460>**__`)
}, 2000)
}
});

//
const ft = ""

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket") && channel.parentId === ft) {
 setTimeout(() => {

channel.send(``)
}, 2000)
}
});

//




client.login(``)
