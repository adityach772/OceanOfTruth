/**
 * Ocean of Bhagavad Gita - Little Hearts Story Page JavaScript
 *
 * Simple story-based navigation for children with embedded verses
 *
 * @version 1.0.0
 * @author Ocean of Gita Team
 */

(function() {
    'use strict';

    // ==========================================================================
    // Story Database - Stories with embedded Gita verses
    // ==========================================================================

    const storiesDatabase = [
        {
            id: 1,
            title: "Story 1: The Ant and Her Duty",
            icon: "fa-seedling",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-seedling"></i>
                </div>
                <h2 class="story-title">The Ant and Her Duty</h2>

                <p class="story-text">
                    Once upon a time, in a beautiful garden filled with colorful flowers, there lived a little ant named Anvi. Anvi was very hardworking and always cheerful. Every morning, she would wake up with the sun and start her day.
                </p>

                <p class="story-text">
                    One sunny morning, Anvi found a big, shiny grain of sugar near a rose bush. Her eyes sparkled with joy! "Oh my! This is the biggest sugar grain I've ever seen!" she exclaimed. "I must take this home to my family. Everyone will be so happy!"
                </p>

                <p class="story-text">
                    Anvi picked up the heavy sugar grain and started walking towards her anthill. It was quite far away, and the sugar grain was very heavy. But Anvi didn't mind. She walked slowly but steadily, one tiny step at a time.
                </p>

                <p class="story-text">
                    On her way, she met her friend Chintu the butterfly, who was dancing from flower to flower. "Anvi! Where are you going with that huge sugar grain?" asked Chintu, landing on a nearby leaf.
                </p>

                <p class="story-text">
                    "I'm taking it home to my family," replied Anvi, struggling a little under the weight.
                </p>

                <p class="story-text">
                    Chintu looked worried. "But it's so heavy, Anvi! Your back will hurt! And look, the sun is getting hotter. Why don't you just eat some of it here and rest? You've already worked so hard this morning!"
                </p>

                <p class="story-text">
                    Anvi smiled at her kind friend. "Thank you for caring about me, Chintu. Yes, it is heavy, and yes, I am tired. But you know what? My job is to bring food home to my family. That's what I need to do."
                </p>

                <p class="story-text">
                    "But what if they don't appreciate it?" asked Chintu. "What if they don't even notice how hard you worked?"
                </p>

                <p class="story-text">
                    Anvi stopped for a moment and thought. Then she said something very wise: "Whether they praise me or not, whether I get a bigger share or not, whether anyone even notices or not - none of that matters, Chintu. What matters is that I do my work well because it's the right thing to do. I feel happy inside when I do my duty with all my heart!"
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">This reminds us of what Lord Krishna taught in the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Karmanye vadhikaraste ma phaleshu kadachana<br>Ma karma phala hetur bhur ma te sangotsva karmani</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 2, Verse 47</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> You have a right to do your work, but you should not worry about the results. Don't work just to get rewards, but also never stop doing your duty.
                    </p>
                </div>

                <p class="story-text">
                    Chintu understood. "You're right, Anvi! You're very wise. I'll remember this too!"
                </p>

                <p class="story-text">
                    With that, little Anvi continued her journey home. Step by step, she carried the sugar grain. When she finally reached her anthill, she placed the sugar grain with the other food. Her family was indeed very happy, but Anvi felt even happier - not because of their praise, but because she had done her work with love and dedication.
                </p>

                <p class="story-text">
                    That night, as Anvi went to sleep, she felt a deep peace in her heart. She had learned something beautiful: when we do our work honestly and without worrying about rewards, we feel truly happy inside!
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        Just like Anvi the ant, we should do our work - whether it's studying, helping at home, or being kind to friends - without always thinking "What will I get?" When we do our duty with a happy heart, we feel peaceful inside, and that's the biggest reward of all!
                    </p>
                </div>
            `
        },
        {
            id: 2,
            title: "Story 2: The Worried Squirrel",
            icon: "fa-dove",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-dove"></i>
                </div>
                <h2 class="story-title">The Worried Squirrel</h2>

                <p class="story-text">
                    In a big oak tree in the middle of a forest, there lived a squirrel named Chiku. Chiku was a good squirrel who loved collecting nuts for winter. But there was one problem - Chiku worried about everything!
                </p>

                <p class="story-text">
                    "What if winter comes early this year?" Chiku would think while collecting nuts. "What if I don't find enough nuts? What if other squirrels take my nuts? What if, what if, what if..." His little mind was always full of worries!
                </p>

                <p class="story-text">
                    One beautiful autumn day, while Chiku was worrying as usual, wise old Owl landed on a nearby branch. Owl had lived in the forest for many, many years and was known for his wisdom.
                </p>

                <p class="story-text">
                    "Good morning, Chiku," said Owl kindly. "Why do you look so worried on this beautiful day?"
                </p>

                <p class="story-text">
                    Chiku sighed. "Oh, Owl! I'm worried about so many things! What if winter is very long this year? What if snow covers all the nuts? What if I get sick and can't collect enough food?"
                </p>

                <p class="story-text">
                    Owl listened patiently. Then he asked Chiku a simple question: "Can you control when winter comes?"
                </p>

                <p class="story-text">
                    "No," said Chiku quietly.
                </p>

                <p class="story-text">
                    "Can you control how long winter will last?" asked Owl.
                </p>

                <p class="story-text">
                    "No," said Chiku again.
                </p>

                <p class="story-text">
                    "Can you control if it will snow or how much it will snow?" asked Owl.
                </p>

                <p class="story-text">
                    "No, no, no!" said Chiku, feeling even more worried now!
                </p>

                <p class="story-text">
                    But Owl smiled gently. "Then why are you worrying about things you cannot control? Let me ask you different questions now. Can you collect one nut today?"
                </p>

                <p class="story-text">
                    "Yes!" said Chiku.
                </p>

                <p class="story-text">
                    "Can you store it safely in your home?"
                </p>

                <p class="story-text">
                    "Yes, I can do that!" said Chiku, feeling a little better.
                </p>

                <p class="story-text">
                    "Can you do your best work today, right now, in this moment?"
                </p>

                <p class="story-text">
                    "Yes, I can!" Chiku's face brightened up.
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">Owl shared an ancient wisdom from the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Karmanye vadhikaraste ma phaleshu kadachana<br>Ma karma phala hetur bhur ma te sangotsva karmani</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 2, Verse 47</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> Focus on doing your work well. Don't worry too much about results that you cannot control. Do your best today, and tomorrow will take care of itself.
                    </p>
                </div>

                <p class="story-text">
                    "So," continued Owl, "instead of worrying about the future you cannot control, just focus on what you CAN do today. Collect nuts one at a time. Store them carefully. Do your work well. When you focus on doing your best right now, you don't have time to worry!"
                </p>

                <p class="story-text">
                    Chiku understood! From that day on, whenever worry started creeping into his mind, he would remember Owl's words. Instead of thinking "What if winter is terrible?" he would think "What can I do well today?"
                </p>

                <p class="story-text">
                    He collected nuts with focus and joy. He stored them carefully. He did his best work each day. And you know what? When winter finally came, Chiku had plenty of nuts! But more importantly, he had spent the whole autumn happy and peaceful instead of worried and anxious.
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        Worrying about results we can't control only makes us anxious and unhappy. Instead, we should focus on doing our best work today - study well today, be kind today, work hard today. When we do our duty well right now, we feel peaceful, and the results take care of themselves!
                    </p>
                </div>
            `
        },
        {
            id: 3,
            title: "Story 3: The Seasons of Feelings",
            icon: "fa-tree",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-tree"></i>
                </div>
                <h2 class="story-title">The Seasons of Feelings</h2>

                <p class="story-text">
                    Little Maya loved spending time with her grandmother in their beautiful garden. Grandmother had lived for many years and knew many wonderful things about life.
                </p>

                <p class="story-text">
                    One spring day, Maya was sitting in the garden looking at all the colorful flowers - red roses, yellow sunflowers, purple lavender. The garden was so beautiful! Maya felt very happy.
                </p>

                <p class="story-text">
                    A few months later, in winter, Maya came to the garden again. This time, there were no flowers. The trees had lost their leaves. Everything looked brown and empty. Maya felt sad.
                </p>

                <p class="story-text">
                    She went to her grandmother with tears in her eyes. "Grandma, I don't understand. Sometimes I feel so happy, and sometimes I feel so sad. Why do my feelings keep changing? What's wrong with me?"
                </p>

                <p class="story-text">
                    Grandmother smiled gently and held Maya's hand. "Come with me to the garden, dear. I want to show you something."
                </p>

                <p class="story-text">
                    They both went to the garden. Grandmother pointed at the empty flower beds. "Do you remember how beautiful the flowers were in spring?"
                </p>

                <p class="story-text">
                    "Yes!" said Maya. "But now they're all gone. The garden looks so sad!"
                </p>

                <p class="story-text">
                    "Tell me, Maya," asked Grandmother, "is our garden gone forever?"
                </p>

                <p class="story-text">
                    Maya thought for a moment. "No, Grandma. The flowers will come back in spring!"
                </p>

                <p class="story-text">
                    "Exactly!" said Grandmother. "In summer, we have flowers and warmth. In winter, the garden looks empty and it's cold. But does winter stay forever?"
                </p>

                <p class="story-text">
                    "No! After winter comes spring, then summer again!" Maya was beginning to understand.
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">Grandmother shared a beautiful teaching from the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Matra sparshas tu kaunteya shitoshna sukha duhkha dah<br>Agamapayino nityaas tams titikshasva bharata</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 2, Verse 14</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> Happiness and sadness come and go like summer and winter. They don't stay forever. Just like seasons change, our feelings also change. We should be patient and remember that both will pass.
                    </p>
                </div>

                <p class="story-text">
                    "Your feelings are just like the seasons, my dear," explained Grandmother. "Sometimes you feel happy like summer with all its flowers and sunshine. Sometimes you feel sad like winter when everything seems cold and empty. But just like the seasons, your feelings will change too!"
                </p>

                <p class="story-text">
                    "So when I feel sad, it won't last forever?" asked Maya, feeling hopeful.
                </p>

                <p class="story-text">
                    "That's right!" said Grandmother. "Sadness comes like winter, but it will pass. Happiness will return like spring. Neither happiness nor sadness stays forever. They come and they go. That's just how life works."
                </p>

                <p class="story-text">
                    "But Grandma, what should I do when I feel sad?" asked Maya.
                </p>

                <p class="story-text">
                    Grandmother hugged her. "When you feel sad, remember - this is like winter, and spring will come again. Be patient with yourself. It's okay to feel sad sometimes. Just don't think it will last forever. And when you're happy, enjoy it! But also remember that challenges will come again, just like winter comes after summer. That's okay too!"
                </p>

                <p class="story-text">
                    Maya felt so much better! From that day on, whenever she felt sad, she would remember the garden. "This is my winter feeling," she would think. "Spring will come soon." And whenever she felt happy, she enjoyed it fully while it lasted.
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        All feelings - happiness, sadness, excitement, boredom - they all come and go like seasons. When you feel sad, remember this feeling won't last forever, just like winter doesn't last forever. Be patient with yourself, and know that happier times will come again, just like spring always follows winter!
                    </p>
                </div>
            `
        },
        {
            id: 4,
            title: "Story 4: The Fish Who Wanted to Climb",
            icon: "fa-fish",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-fish"></i>
                </div>
                <h2 class="story-title">The Fish Who Wanted to Climb</h2>

                <p class="story-text">
                    In a beautiful, clear pond lived a young fish named Finny. The pond was surrounded by tall trees where monkeys would play and climb all day long. Finny loved watching them jump from branch to branch!
                </p>

                <p class="story-text">
                    "Wow! Look how happy they are up there!" thought Finny. "They climb so high and see everything! I wish I could do that too!"
                </p>

                <p class="story-text">
                    Every day, Finny would try to climb the rocks near the shore. He would flip and flop, trying to get higher, but he would always slide back into the water. The monkeys made it look so easy, but for Finny, it was impossible!
                </p>

                <p class="story-text">
                    Finny started feeling very sad. "I'm such a failure," he thought. "Everyone can climb trees except me. The monkeys can do it. Even the squirrels can do it. But I can't! Something must be wrong with me."
                </p>

                <p class="story-text">
                    He became so focused on climbing that he stopped enjoying swimming. He stopped exploring the beautiful underwater caves. He just felt like a failure all the time.
                </p>

                <p class="story-text">
                    One day, an old wise turtle named Shelly swam by and noticed Finny looking very upset. "What's wrong, young friend?" asked Shelly.
                </p>

                <p class="story-text">
                    "I'm terrible at everything!" said Finny sadly. "I've been trying and trying to climb trees like the monkeys, but I just can't do it! I keep slipping and falling. I'm such a failure!"
                </p>

                <p class="story-text">
                    Shelly looked puzzled. "Why are you trying to climb trees?"
                </p>

                <p class="story-text">
                    "Because the monkeys look so happy up there! I want to be happy like them!" explained Finny.
                </p>

                <p class="story-text">
                    Shelly smiled wisely. "Can the monkeys swim to the bottom of our pond like you can?"
                </p>

                <p class="story-text">
                    "No," said Finny.
                </p>

                <p class="story-text">
                    "Can they explore the underwater caves and see the beautiful coral like you can?" asked Shelly.
                </p>

                <p class="story-text">
                    "No, they can't!" Finny was starting to think.
                </p>

                <p class="story-text">
                    "Can they swim through the waterfall and see the rainbow from inside like you can?" continued Shelly.
                </p>

                <p class="story-text">
                    "No! They would be scared of water!" said Finny.
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">Then Shelly shared an important teaching from the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Shreyan sva dharmo vigunah para dharmat svanushthitat<br>Sva dharme nidhanam shreyah para dharmo bhayavahah</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 3, Verse 35</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> It's better to do your own work, even if you're not perfect at it, than to copy someone else's work. Everyone has their own special gifts and path. Following your own path makes you happy; copying others only brings confusion and sadness.
                    </p>
                </div>

                <p class="story-text">
                    Shelly continued, "You are a FISH, Finny! Monkeys climb because that's what monkeys do. But you swim! And you swim beautifully! You can dive deep, explore underwater worlds, dance with other fish, and see things that monkeys will NEVER see in their entire lives! That's YOUR special gift!"
                </p>

                <p class="story-text">
                    "Instead of being a bad monkey, why not be the best fish you can be?" asked Shelly.
                </p>

                <p class="story-text">
                    Suddenly, everything became clear to Finny! He had been trying so hard to be like the monkeys that he forgot how amazing it is to be a fish!
                </p>

                <p class="story-text">
                    "You're right, Shelly!" said Finny excitedly. "I CAN swim fast! I CAN explore the deep pond! I CAN do things that monkeys can't! That's MY special talent!"
                </p>

                <p class="story-text">
                    From that day on, Finny stopped trying to climb trees. Instead, he practiced swimming faster and diving deeper. He explored every corner of the pond. He became the best swimmer among all the fish! And guess what? He felt truly happy - not because he was like the monkeys, but because he was being himself!
                </p>

                <p class="story-text">
                    One day, the monkeys even told him, "Finny, we wish we could swim like you! You're amazing!" And Finny smiled, understanding that everyone has their own special gifts.
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        Everyone has different talents and gifts. Some children are good at sports, others at art, others at math, others at making friends. Don't feel confused or sad trying to be like someone else. Discover what YOU are good at, what YOU enjoy, and be the best at that! Your own path, even if it's different from others, is the right path for you!
                    </p>
                </div>
            `
        },
        {
            id: 5,
            title: "Story 5: The Dancing Monkey",
            icon: "fa-monkey",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-paw"></i>
                </div>
                <h2 class="story-title">The Dancing Monkey</h2>

                <p class="story-text">
                    High up in the jungle trees lived a young monkey named Milo who simply could NOT sit still! He would jump from tree to tree, swing from branch to branch, and chatter all day long. His mind was always racing with thoughts - "What's that? Let me check! Oh look, a banana! Wait, what's that sound? I should go see!"
                </p>

                <p class="story-text">
                    Milo's mother would often say, "Milo, you must learn to sit quietly sometimes. Always jumping around will make you tired and you won't learn anything properly!"
                </p>

                <p class="story-text">
                    "I can't help it, Mama!" said Milo. "My mind keeps telling me to jump, jump, jump! It tells me to look at this, check that, do this, do that! I can't make it stop!"
                </p>

                <p class="story-text">
                    One day, while Milo was jumping around frantically, he slipped and fell into a soft bush. He wasn't hurt, but he felt very frustrated. "Why can't I control myself?" he cried.
                </p>

                <p class="story-text">
                    A wise old turtle named Kamesha, who was passing by, heard Milo crying. "What's troubling you, little one?" she asked gently.
                </p>

                <p class="story-text">
                    "My mind is too fast! It won't calm down! I can't sit still even for a moment!" explained Milo sadly.
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">Kamesha shared ancient wisdom from the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Asanshayam maha baho mano durnigraham chalam<br>Abhyasena tu kaunteya vairagyena cha grihyate</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 6, Verse 35</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> It is true that the mind is very difficult to control and restless. But with practice and patience, it can be trained to become calm and peaceful.
                    </p>
                </div>

                <p class="story-text">
                    "Everyone's mind is like that, Milo," said Kamesha kindly. "Even my mind was like a jumping monkey when I was young! But you know what? You CAN train it, just like you can train your body to climb better."
                </p>

                <p class="story-text">
                    "How?" asked Milo with hope in his eyes.
                </p>

                <p class="story-text">
                    "Start very small," explained Kamesha. "Can you sit still for just ten seconds? Just count to ten slowly?"
                </p>

                <p class="story-text">
                    "Ten seconds? Maybe..." said Milo doubtfully.
                </p>

                <p class="story-text">
                    "Try it now," encouraged Kamesha. "Sit on this branch, close your eyes, and count slowly to ten. Don't think about anything else. Just count."
                </p>

                <p class="story-text">
                    Milo tried. He closed his eyes and started counting. "One... two... three..." But at four, he thought about a banana and wanted to jump! His mind said "Let's go find bananas!"
                </p>

                <p class="story-text">
                    "It's okay," said Kamesha. "That's normal! Try again tomorrow. Little by little, you'll get better."
                </p>

                <p class="story-text">
                    Milo practiced every day. Day 1: he could sit still for just 5 seconds. Day 2: 8 seconds! Day 3: 10 whole seconds! Day 5: 20 seconds! Day 10: a whole minute! Each day, it got a little easier.
                </p>

                <p class="story-text">
                    After two weeks, Milo could sit calmly for five minutes! He was so proud of himself! And you know what? He noticed something wonderful - when his mind was calm, he could actually enjoy things more! He could taste his banana instead of just gobbling it up. He could listen to the beautiful bird songs instead of just hearing noise. He could watch the sunset instead of missing it entirely!
                </p>

                <p class="story-text">
                    "Kamesha, you were right!" said Milo happily. "My mind was like a wild monkey, but with practice every day, it's learning to be calm! It's not perfect yet, but it's so much better!"
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        Everyone's mind is restless - jumping from one thought to another like a monkey! But we can train it with practice. Start small - maybe sit quietly for just one minute each day, taking deep breaths. Slowly, your mind will learn to be calm. With practice and patience, even the wildest mind can become peaceful!
                    </p>
                </div>
            `
        },
        {
            id: 6,
            title: "Story 6: The Angry Tiger",
            icon: "fa-cat",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-cat"></i>
                </div>
                <h2 class="story-title">The Angry Tiger</h2>

                <p class="story-text">
                    In the deep jungle lived a strong tiger named Raja. Raja was brave and powerful, but he had one big problem - he got angry very, very easily! The smallest things would make him furious!
                </p>

                <p class="story-text">
                    One morning, Raja stubbed his toe on a rock. "OW!" he roared. He got so angry at the rock that he started hitting it with his paws! Of course, this only made his paws hurt more, which made him even angrier!
                </p>

                <p class="story-text">
                    Another day, his friend Devi the deer accidentally stepped on his tail. Raja got so angry that he roared loudly at her and said mean things. Devi got scared and ran away. She didn't talk to Raja for many days after that.
                </p>

                <p class="story-text">
                    Raja began to notice that whenever he got angry, bad things happened. He would hurt himself, lose his friends, or do things he regretted later. But he didn't know how to stop!
                </p>

                <p class="story-text">
                    One day, after another angry outburst, Raja sat down feeling miserable. An old, wise elephant named Gaja walked by. Gaja had known Raja since he was a cub.
                </p>

                <p class="story-text">
                    "Raja, my friend, I see you are troubled," said Gaja kindly.
                </p>

                <p class="story-text">
                    "I can't control my anger, Gaja!" said Raja sadly. "When I get angry, it's like I can't think properly. I do stupid things! I hurt my friends! I make terrible decisions! What's wrong with me?"
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">Gaja shared a wise teaching from the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Krodhad bhavati sammohah sammohat smriti vibhramah<br>Smriti bhranshat buddhi nasho buddhi nashat pranashyati</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 2, Verse 63</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> From anger comes confusion. When confused, we forget what is right and wrong. When we forget right and wrong, we lose our ability to think clearly. And when we can't think clearly, we make terrible mistakes that hurt ourselves and others.
                    </p>
                </div>

                <p class="story-text">
                    "You see, Raja," explained Gaja, "anger is like a fire that first burns inside you, and then spreads out to burn everything around you. When you're angry, your smart, thinking mind stops working. You can only feel the anger, not think clearly."
                </p>

                <p class="story-text">
                    "But how do I stop it?" asked Raja desperately.
                </p>

                <p class="story-text">
                    "The secret," said Gaja, "is to catch it early - the moment you feel anger starting. Here's what you do: First, STOP. Don't do anything. Don't say anything. Just stop."
                </p>

                <p class="story-text">
                    "Then, take three deep breaths. Slowly. In... and out. In... and out. In... and out."
                </p>

                <p class="story-text">
                    "Then, count to ten in your mind before doing or saying anything."
                </p>

                <p class="story-text">
                    "That's it?" asked Raja. "That simple?"
                </p>

                <p class="story-text">
                    "Simple, but not easy," smiled Gaja. "You have to practice. Anger wants you to act RIGHT NOW. But if you can wait just ten seconds, your thinking mind comes back, and you can make a better choice."
                </p>

                <p class="story-text">
                    Raja decided to try. The next day, a monkey accidentally dropped a coconut that bonked Raja on the head! Raja felt anger rising like a volcano! But he remembered Gaja's advice.
                </p>

                <p class="story-text">
                    STOP. (Raja stopped himself from roaring)
                </p>

                <p class="story-text">
                    BREATHE. (In... out. In... out. In... out.)
                </p>

                <p class="story-text">
                    COUNT. (One... two... three... up to ten)
                </p>

                <p class="story-text">
                    By the time Raja reached ten, the burning anger had cooled down. He could think clearly again! He looked up at the monkey and said calmly, "Please be more careful with those coconuts!"
                </p>

                <p class="story-text">
                    The monkey apologized, and they both laughed about it! Raja felt so much better than he would have if he'd gotten angry!
                </p>

                <p class="story-text">
                    Over time, Raja got better and better at catching his anger early. He made fewer mistakes, kept his friends, and felt much happier!
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        Anger makes us do silly things we regret later. When you feel angry, remember: STOP (don't act), BREATHE (take 3 deep breaths), COUNT (count to 10 slowly). By the time you reach ten, your calm, thinking mind will come back, and you can make a better choice. Never make decisions when angry!
                    </p>
                </div>
            `
        },
        {
            id: 7,
            title: "Story 7: The Brave Little Mouse",
            icon: "fa-mouse",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-spider"></i>
                </div>
                <h2 class="story-title">The Brave Little Mouse</h2>

                <p class="story-text">
                    In a cozy burrow near a farmhouse lived a little mouse named Minu. Minu was small, and there was one thing that scared her a lot - leaving her safe burrow! Outside, there was a big cat named Whiskers who loved to chase mice!
                </p>

                <p class="story-text">
                    But Minu had a problem. She needed to go outside to find food for her baby mice. If she didn't go out, her babies would go hungry. But she was so scared!
                </p>

                <p class="story-text">
                    Every morning, Minu would stand at the entrance of her burrow, trembling with fear. "What if the cat catches me? What if I can't run fast enough? What if something terrible happens?" she would think, and then run back inside to her safe burrow.
                </p>

                <p class="story-text">
                    But her babies were getting hungrier. One day, Minu's wise mother came to visit. She saw Minu standing at the burrow entrance, frozen with fear.
                </p>

                <p class="story-text">
                    "Minu, dear, what's wrong?" asked her mother.
                </p>

                <p class="story-text">
                    "I'm too scared to go out, Mama!" cried Minu. "The cat might catch me! But if I don't go out, my babies will starve! What should I do?"
                </p>

                <p class="story-text">
                    Her mother smiled gently. "Let me tell you something important, Minu. Being brave doesn't mean you're not afraid. It means you do what you must do EVEN WHEN you're afraid."
                </p>

                <p class="story-text">
                    "But I'm so scared!" said Minu.
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">Mama mouse shared wisdom from the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Karmany akarma yah pashyed akarmani cha karma yah<br>Sa buddhiman manushyeshu sa yuktah krisna karma krit</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 4, Verse 18</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> A wise person knows when to act even when scared, and when to be still even when tempted to act. True wisdom is doing the right thing at the right time, whether we feel afraid or not.
                    </p>
                </div>

                <p class="story-text">
                    "You see, Minu," continued her mother, "fear is natural. It keeps us careful and alert. But staying frozen in fear is worse than acting carefully despite the fear."
                </p>

                <p class="story-text">
                    "So what should I do?" asked Minu.
                </p>

                <p class="story-text">
                    "Here's the secret," said Mama. "You can be afraid AND still act! First, be smart - check if the cat is around. If the coast is clear, go quickly but carefully. Gather food close to your burrow. Stay alert. Then come back home safely."
                </p>

                <p class="story-text">
                    "You mean... I don't have to wait until I'm not afraid anymore?" asked Minu.
                </p>

                <p class="story-text">
                    "Exactly!" said Mama. "If you wait until you're not afraid, you might wait forever! Do your duty carefully and smartly, even while afraid. That's true bravery!"
                </p>

                <p class="story-text">
                    Minu understood! She took a deep breath. Yes, she was still afraid. Her heart was beating fast. But she had a duty to her babies!
                </p>

                <p class="story-text">
                    She peeked outside. The cat was sleeping far away in the sun. This was her chance! Even though fear was still there, Minu ran out quickly, grabbed some grains that were nearby, and rushed back to her burrow - all in less than a minute!
                </p>

                <p class="story-text">
                    "I did it!" squeaked Minu excitedly. "I was afraid, but I still did it!"
                </p>

                <p class="story-text">
                    "That's my brave girl," said Mama proudly. "You didn't let fear stop you from doing what was necessary."
                </p>

                <p class="story-text">
                    From that day on, Minu went out every day to gather food. She was still careful, still alert, and yes, sometimes still a little afraid. But she never let fear paralyze her again. She learned to act wisely even when afraid, and that made all the difference!
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        Being brave doesn't mean you never feel afraid. It means doing what you need to do even when you're scared! Before a test, before speaking in class, before trying something new - it's okay to feel afraid. The trick is to be smart, be careful, but still act. Don't let fear freeze you and stop you from doing what's necessary!
                    </p>
                </div>
            `
        },
        {
            id: 8,
            title: "Story 8: Two Paths Up the Mountain",
            icon: "fa-mountain",
            content: `
                <div class="story-icon-large">
                    <i class="fas fa-mountain"></i>
                </div>
                <h2 class="story-title">Two Paths Up the Mountain</h2>

                <p class="story-text">
                    In a beautiful valley surrounded by mountains, there lived two best friends - Arya and Kabir. They both had the same dream: to reach the top of the great Mountain of Wisdom that stood tall above their village.
                </p>

                <p class="story-text">
                    One day, they decided to make the climb together. They packed their bags and started the journey early in the morning.
                </p>

                <p class="story-text">
                    But when they reached the base of the mountain, they discovered something interesting - there were two different paths leading to the top!
                </p>

                <p class="story-text">
                    The first path had a sign that read: "Path of Knowledge - Study the maps, learn about the mountain, understand each step."
                </p>

                <p class="story-text">
                    The second path had a sign that read: "Path of Action - Start climbing, learn by doing, experience each step."
                </p>

                <p class="story-text">
                    Arya loved to study and learn. She said, "I want to take the first path! I'll study the maps, learn about which plants are safe to eat, understand the weather patterns, and plan my route carefully."
                </p>

                <p class="story-text">
                    Kabir was more active and loved to learn by doing. He said, "I want to take the second path! I'll start climbing right away and learn as I go, experiencing everything firsthand!"
                </p>

                <p class="story-text">
                    They looked at each other, worried. "But... we wanted to go together! Which path is the RIGHT path?" they wondered.
                </p>

                <p class="story-text">
                    Just then, a wise old sage who lived at the base of the mountain came by. He saw their confusion and smiled kindly.
                </p>

                <div class="verse-in-story">
                    <p class="verse-label">The sage shared a teaching from the Bhagavad Gita:</p>
                    <p class="verse-sanskrit-text">Loke smin dvi vidha nishtha pura prokta mayanagha<br>Jnana yogena sankhyanam karma yogena yoginam</p>
                    <p class="verse-reference-text">Bhagavad Gita: Chapter 3, Verse 3</p>
                    <p class="verse-translation-text">
                        <strong>Meaning:</strong> In this world, there are two valid paths to reach the goal. One is the path of knowledge and learning for those who love to study and think. The other is the path of action and doing for those who love to work and experience. Both paths lead to the same mountaintop!
                    </p>
                </div>

                <p class="story-text">
                    "You see, dear children," explained the sage, "both paths will take you to the top! Arya, you like to learn by studying, thinking, and planning. That's your nature! Take the Path of Knowledge."
                </p>

                <p class="story-text">
                    "And Kabir, you like to learn by doing, experiencing, and acting. That's YOUR nature! Take the Path of Action."
                </p>

                <p class="story-text">
                    "But won't one path be better than the other?" asked Arya.
                </p>

                <p class="story-text">
                    "Neither is better!" said the sage. "They're just different! What matters is choosing the path that fits YOUR nature. Some people reach the truth by studying and thinking deeply. Others reach the same truth by working and experiencing directly. The mountaintop is the same!"
                </p>

                <p class="story-text">
                    "So we can both be right, even though we're doing different things?" asked Kabir.
                </p>

                <p class="story-text">
                    "Exactly!" laughed the sage. "Stop worrying about which path is 'right.' Instead, ask yourself: which path fits my nature? And then follow that path with full dedication!"
                </p>

                <p class="story-text">
                    Arya and Kabir felt so relieved! They didn't have to follow the same path or worry that one was wrong!
                </p>

                <p class="story-text">
                    Arya took the Path of Knowledge. She studied maps, learned about plants and weather, planned carefully, and climbed step by step with understanding.
                </p>

                <p class="story-text">
                    Kabir took the Path of Action. He started climbing immediately, learned by trying different routes, helped other climbers along the way, and discovered things through direct experience.
                </p>

                <p class="story-text">
                    After several days, both friends reached the mountaintop! They met at the summit and hugged each other with joy!
                </p>

                <p class="story-text">
                    "You made it!" they both said together!
                </p>

                <p class="story-text">
                    "I learned so much by studying and planning!" said Arya.
                </p>

                <p class="story-text">
                    "And I learned so much by doing and experiencing!" said Kabir.
                </p>

                <p class="story-text">
                    "We both made it to the top, just in different ways!" they realized. "The sage was right - both paths are good! We just needed to find the one that matched our own nature!"
                </p>

                <div class="story-lesson">
                    <h4 class="lesson-heading">What We Learn</h4>
                    <p class="lesson-text">
                        There's not just one "right way" to learn and grow! Some people learn best by reading and studying. Others learn best by doing and experiencing. Some love quiet thinking, others love active working. Don't feel lost comparing yourself to others! Find YOUR way - the way that fits your nature - and follow it with dedication. Different paths can lead to the same wonderful destination!
                    </p>
                </div>
            `
        }
    ];

    // Current state
    let currentStoryIndex = 0;

    // ==========================================================================
    // Story Display Functions
    // ==========================================================================

    function loadStory(index) {
        const story = storiesDatabase[index];
        if (!story) return;

        // Update story counter
        document.getElementById('story-counter').textContent =
            `Story ${index + 1} of ${storiesDatabase.length}`;

        // Update story content
        document.getElementById('story-body').innerHTML = story.content;

        // Update navigation buttons
        document.getElementById('prev-story-btn').disabled = (index === 0);
        document.getElementById('next-story-btn').disabled = (index === storiesDatabase.length - 1);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ==========================================================================
    // Navigation Functions
    // ==========================================================================

    window.nextStory = function() {
        if (currentStoryIndex < storiesDatabase.length - 1) {
            currentStoryIndex++;
            loadStory(currentStoryIndex);
        }
    };

    window.previousStory = function() {
        if (currentStoryIndex > 0) {
            currentStoryIndex--;
            loadStory(currentStoryIndex);
        }
    };

    // ==========================================================================
    // Initialize
    // ==========================================================================

    document.addEventListener('DOMContentLoaded', function() {
        // Load first story
        loadStory(currentStoryIndex);

        console.log('📖 Gita for Little Hearts - Story System Loaded');
        console.log('📚 Total Stories:', storiesDatabase.length);
    });

})();
