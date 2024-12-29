function getDayMessage(day: number): void {
	switch (day) {
		case 0:
			// about button
			alert(
				"Hello, I'm Joe!\n" +
					"I made this little calendar as a surprise gift for my lovely girlfriend this Christmas!\n" +
					"This calendar is meant to reveal cute date ideas and cozy memories when you click on a day\n\n" +
					"Enjoy! 🎄",
			);
			break;
		case 1:
			alert(
				"[DAY 1]" +
					"Happy 1st!\nHow nice that this day is perfectly lined up on a Sunday!",
			);
			break;
		case 2:
			alert(
				"[DAY 2]\n" +
					"Streaming our favorite shows on Netflix using the Teleparty extension and hitting the little react buttons",
			);
			break;
		case 3:
			alert("[DAY 3]\n" + "Talking about all the tea that happened at work 💅");
			break;
		case 4:
			// alert(
			// 	"[DAY 4]\n" +
			// 		"Going to see the Philly portal near Love Park and look at the European Traffic lights change colors 🚦\n" +
			// 		"And everyone's taking pictures of a blank screen while it loads 🌍📸📸📸",
			// );
			alert(
				"[DAY 4]\n" +
					"I'm pretty sure we went to visit the Philly portal and look at European streets...\n" +
					"um.. But I know for a fact that we had so much fun filming our taco cooking adventures! 🌮\n" +
					"Such funny vlogs 🫰🫰🫰",
			);
			break;

		case 5:
			alert(
				"[DAY 5]\n" +
					"Going to Drexel Lebow to grab free merch, visit a professor, and obtain a very nice dragon pin 🐉\n" +
					"Ending the night ordering unreasonably expensive dinner but playing very fun boardgames ♟️🎲",
			);
			break;

		case 6:
			alert(
				"[DAY 6]\n" + "I got so excited to be in a Drexel finance article!!",
			);
			break;

		case 7:
			alert("[DAY 7]\n" + "Texting you on train rides ~");
			break;

		case 8:
			alert(
				"[DAY 8]\n" + "A leaky dishwasher leads to meeting the neighbors💧",
			);
			break;

		case 9:
			alert(
				"[DAY 9]\n" +
					"Remote working and trying to solve a healthcare mystery 👀",
			);
			break;
		case 10:
			alert(
				"[DAY 10]\n" +
					"We were looking awfully fluffy and a package full of work merch came in the mail! 📦",
			);
			break;
		case 11:
			alert(
				"[DAY 11]\n" +
					"I realized how much I don't like having to deal with complicated healthcare systems ay no." +
					"\nTook me like 4 hours to understand how to change a PCP 👎",
			);
			break;
		case 12:
			alert(
				"[DAY 12]\n" +
					"Remembering the Karaoke moments at that one bar near Cira Green 🎤",
			);
			break;
		case 13:
			alert("[DAY 13]\n" + "A surprise visit back to Philly~");
			break;

		case 14:
			alert(
				"[DAY 14]\n" +
					"Shopping and shopping and shopping 🛍️" +
					"\nTaking some nice pics in the city and admiring our new fits :)",
			);
			break;
		case 15:
			alert(
				"[DAY 15]\n" +
					"spotting jets in the sky along our CVS run... which turned into a visit to Kiwi Frozen Yogurt 🍦" +
					"\nWalking along the streets of West Philly with you seems so long ago but so recent. I would happily do it again~",
			);
			break;

		case 16:
			alert(
				"[DAY 16]\n" +
					"One of the foggiest days to go exploring 🌫️" +
					"\nOne of the many Christmas tree photos to collect this year." +
					"\nI was definitely a better photographer than the couple who photographed us 👀",
			);
			break;
		case 17:
			alert(
				"[DAY 17]\n" +
					"Our cooking date to make the best Halal food ever. Now we know their secrets 👌",
			);
			break;
		case 18:
			alert(
				"[DAY 18]\n" +
					"Just realized how cute you look with glasses 😎" +
					"\nAnd plus they allow you to actually see!",
			);
			break;
		case 19:
			alert(
				"[DAY 19]\n" +
					"Meeting up with a good friend to go shopping and explore the Christmas Village for like the 10th time! \n\n'slay!'",
			);
			break;

		case 20:
			alert(
				"[DAY 20]\n" +
					"You were so happy when you found out I was gonna stay with you for another day that you fell asleep next to me 😴" +
					"\nThe winter snow started coming down and we went out for a nice meal where they gave me a free drink- how nice!",
			);
			break;

		case 21:
			alert(
				"[DAY 21]\n" +
					"Literally the coldest day ever in history. And windy too 💨",
			);
			break;

		case 22:
			alert(
				"[DAY 22]\n" +
					"Looking forward to playing more games with you! 🎮\n" +
					"...or building cool apps with you! <type type type> :)",
			);
			break;
		case 23:
			alert(
				"[DAY 23]\n" +
					"Apparently, the most stressful plane ride ever where they gave you 5 minutes to switch flights\n" +
					"\nHaha 'Take a deep breath' they said. Glad everything worked out okay ✈️",
			);
			break;

		case 24:
			alert(
				"[DAY 24]\n" +
					"Dressing fancy for the cold Christmas Eve church while you enjoy much needed southern warmth 🔥",
			);
			break;
		case 25:
			alert(
				"[DAY 25]\n" +
					"Sharing Christmas Memories once again. Imagine one day we are the ones hosting the gathering... ahhh 🎄",
			);
			break;
		case 26:
			alert("We did a lil interviewing. Learned that one company was not it");

			break;
		case 27:
			alert(
				"Teaching you a lil SQL because you came running to me with data base questions inspired to learn 🐘",
			);
			break;
		case 28:
			alert(
				"You dyed your hair!! And we watched a cozy movie together while we remembered last year's holiday chaos",
			);
			break;
		default:
			break;
	}
}

export default getDayMessage;
