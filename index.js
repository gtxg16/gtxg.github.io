async function getDiscordStatus() {
   let data = await lanyard({ userId: '563821928922480641' });
   console.log(data);
   document.getElementById('status').innerHTML = `I'm currently ${data.discord_status == 'dnd' ? 'on do not disturb' : data.discord_status}${
      data.activities[0] ? ` ${data.activities[0].type == 0 ? 'playing' : 'with'} ` + data.activities[0].name : ''
   }.`;
}

function load() {
   getDiscordStatus();
   typeWriter();
}

var i = 0;
var txt = 'view my PC specs '; /* The text */
var speed = 120; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
   if (i < txt.length) {
      document.getElementById('go').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
   } else {
      document.getElementById('go').innerHTML += '<i class="fa-solid fa-eye fa-bounce"></i>';
   }
}
