/**
 * Ocean of Bhagavad Gita - Teaching Page JavaScript
 *
 * Filter-based verse navigation system
 *
 * @version 4.0.0
 * @author Ocean of Gita Team
 */

(function() {
    'use strict';

    // ==========================================================================
    // Verse Database with Emotions and Chapters
    // ==========================================================================

    const versesDatabase = {
        // Verses tagged with emotions
        demotivated: [
            {
                chapter: 2,
                verse: 47,
                sanskrit: "Karmanye vadhikaraste ma phaleshu kadachana\nMa karma phala hetur bhur ma te sangotsva karmani",
                translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
                simpleStory: "<h4>The Ant and the Sugar Grain</h4><p>Once upon a time, there was a little ant named Anvi. One day, Anvi found a big grain of sugar near a garden. She was so happy!</p><p>'I must take this sugar home to my family,' thought Anvi. She picked up the sugar grain and started walking towards her anthill.</p><p>On the way, her friend Chintu the butterfly came flying by. 'Anvi, where are you going with that heavy sugar?' asked Chintu.</p><p>'I'm taking it home to my family,' replied Anvi, struggling under the weight.</p><p>'But it's so heavy! Won't your back hurt? Maybe you should just eat it here and rest,' suggested Chintu.</p><p>Anvi smiled and said, 'My job is to carry food home. Whether I get to eat it or not, whether anyone praises me or not - that's not important. What's important is that I do my duty with all my heart!'</p><p>And with that, little Anvi continued her journey home, happy and content, doing her work without worrying about the rewards.</p><p><strong>What We Learn:</strong> Just like Anvi the ant, we should do our work (like studying, helping at home, being kind to friends) without always thinking 'What will I get?' When we do our duty with a happy heart, we feel peaceful inside - and that's the biggest reward!</p>",
                advancedMeaning: "<p><strong>Understanding the Verse:</strong> This verse addresses our attachment to outcomes. Krishna tells Arjuna 'Karmanye vadhikaraste' - you have authority only over your actions, not over their fruits.</p><p><strong>The Psychological Dimension:</strong> When we perform actions solely for results, we create anxiety. Consider a surgeon - if she focuses only on 'I must save this patient,' anxiety paralyzes her. But if she focuses on performing each step with precision, her expertise flows naturally.</p><p><strong>The Philosophical Foundation:</strong> We control our efforts, not outcomes. A farmer plants seeds with care, but the crop depends on rain, sunshine, and countless factors beyond his control. What he truly controls is the quality of his planting.</p><p><strong>The Practical Method:</strong> Focus entirely on the process. When cooking, think about the precise cutting, perfect timing, care in presentation - not 'They must love this meal.' Notice how focus on process creates presence, and presence creates quality.</p>"
            }
        ],
        anxious: [
            {
                chapter: 2,
                verse: 47,
                sanskrit: "Karmanye vadhikaraste ma phaleshu kadachana\nMa karma phala hetur bhur ma te sangotsva karmani",
                translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
                simpleStory: "<h4>The Worried Squirrel</h4><p>There was a squirrel named Chiku who loved collecting nuts. But Chiku was always worried - 'What if winter is very long? What if I don't find enough nuts? What if other squirrels take my nuts?'</p><p>One day, wise old owl asked Chiku, 'Why do you look so worried?'</p><p>'I'm worried about winter!' said Chiku.</p><p>The owl smiled, 'Can you control when winter comes or how long it lasts?'</p><p>'No,' said Chiku.</p><p>'Then why worry about it? Instead, just focus on collecting one nut at a time, storing it safely. Do your work well today. Tomorrow will take care of itself!'</p><p><strong>What We Learn:</strong> Worrying about results that we can't control only makes us anxious. Instead, focus on doing your best right now - study well today, be kind today, work hard today. The results will come naturally!</p>",
                advancedMeaning: "<p><strong>Anxiety and Control:</strong> Most anxiety stems from trying to control what we cannot. This verse teaches us to release our grip on outcomes and focus on what we can control - our effort, our integrity, our dedication.</p><p><strong>Modern Application:</strong> Before an exam, anxiety comes from thinking 'I must get 95%.' But you can't control the exam paper difficulty, your mental state on exam day, or how others perform. What you can control is: studying with focus today, understanding concepts deeply, practicing regularly. Focus there.</p><p><strong>The Freedom:</strong> When you stop being enslaved to results, you can take creative risks, try bold solutions, learn from failures without shame. You become truly effective precisely because effectiveness is not your primary focus - excellence in action is.</p>"
            }
        ],
        stressed: [
            {
                chapter: 6,
                verse: 35,
                sanskrit: "Asanshayam maha baho mano durnigraham chalam\nAbhyasena tu kaunteya vairagyena cha grihyate",
                translation: "O mighty-armed one, it is undoubtedly very difficult to curb the restless mind, but it is possible by constant practice and by detachment.",
                simpleStory: "<h4>The Dancing Monkey</h4><p>There was a monkey who couldn't sit still. He would jump from tree to tree, branch to branch, never resting. His mother said, 'You must learn to sit quietly sometimes!'</p><p>'I can't! My mind keeps telling me to jump!' said the monkey.</p><p>A wise turtle told him, 'Start small. Sit for just one minute. Then two. Practice every day. Slowly, your mind will learn to be calm.'</p><p>The monkey tried. Day 1: he could sit for 30 seconds. Day 2: one minute. Day 10: five minutes! He learned that his racing mind could be trained with practice.</p><p><strong>What We Learn:</strong> When you feel stressed and your mind races, don't worry! Everyone's mind is like that. But with practice - taking deep breaths, sitting quietly for a few minutes each day - you can train your mind to be calm.</p>",
                advancedMeaning: "<p><strong>The Nature of Mind:</strong> The mind is naturally restless, jumping from thought to thought like a monkey jumping between branches. This verse acknowledges this difficulty but offers a solution: abhyasa (practice) and vairagya (detachment).</p><p><strong>Practice (Abhyasa):</strong> This means repetitive, consistent effort. Meditation, mindfulness, focusing techniques - done regularly, they gradually train the mind. Just as muscles grow stronger with exercise, mental focus strengthens with practice.</p><p><strong>Detachment (Vairagya):</strong> This means not getting caught up in every thought and emotion. Observe thoughts without identifying with them. 'I am anxious' becomes 'I notice anxiety is present.' This subtle shift creates space and freedom.</p><p><strong>Modern Stress Management:</strong> This ancient verse contains the essence of all modern stress management techniques - mindfulness, meditation, cognitive behavioral therapy. All recognize: the mind can be trained, stress can be managed, calm can be cultivated.</p>"
            }
        ],
        confused: [
            {
                chapter: 3,
                verse: 35,
                sanskrit: "Shreyan sva dharmo vigunah para dharmat svanushthitat\nSva dharme nidhanam shreyah para dharmo bhayavahah",
                translation: "It is far better to perform one's own duties imperfectly than to perform another's duties perfectly. Even death in performing one's own duty brings blessings, whereas another's duty is fraught with danger.",
                simpleStory: "<h4>The Fish Who Wanted to Climb</h4><p>There was a fish who saw monkeys climbing trees. 'They look so happy up there!' thought the fish. 'I should learn to climb too!'</p><p>The fish tried and tried but couldn't climb. He felt like a failure.</p><p>An old turtle said, 'Why are you trying to climb? You're a fish! You can swim beautifully, dive deep, explore underwater worlds that monkeys will never see. That's YOUR special gift!'</p><p>The fish realized: instead of badly copying others, he should be the best fish he could be!</p><p><strong>What We Learn:</strong> Everyone has their own special strengths. Don't feel confused trying to be like someone else. Discover what YOU are good at, what YOU enjoy, and be the best at that!</p>",
                advancedMeaning: "<p><strong>Svadharma vs Paradharma:</strong> Svadharma means your own duty/path based on your nature, skills, circumstances. Paradharma means another's duty that may seem attractive but doesn't fit your true nature.</p><p><strong>Modern Confusion:</strong> Social media shows everyone's highlight reel. We see others' success and think 'I should do that too!' This creates confusion about our own path. Someone excels at art, another at mathematics, another at caring for people. Each path is valid.</p><p><strong>The Danger of Comparison:</strong> Trying to follow another's path while ignoring your own nature leads to mediocrity and unhappiness. You'll always be second-rate at someone else's dharma. But you can be first-rate at your own.</p><p><strong>Finding Your Svadharma:</strong> What energizes you? What comes naturally? Where do your interests and society's needs intersect? These questions point toward your svadharma. Follow that, even imperfectly, rather than perfectly imitating someone else's path.</p>"
            }
        ],
        sad: [
            {
                chapter: 2,
                verse: 14,
                sanskrit: "Matra sparshas tu kaunteya shitoshna sukha duhkha dah\nAgamapayino nityaas tams titikshasva bharata",
                translation: "O son of Kunti, the contact between the senses and sense objects gives rise to fleeting perceptions of happiness and distress. These are non-permanent, and come and go like the winter and summer seasons. O descendent of Bharata, try to tolerate them.",
                simpleStory: "<h4>The Seasons of Feelings</h4><p>A little girl asked her grandmother, 'Why do I sometimes feel happy and sometimes sad?'</p><p>Grandmother said, 'Come, let's look at our garden. In summer, there are flowers. In winter, the garden looks empty. Does that mean our garden is gone?'</p><p>'No!' said the girl. 'It's just winter. Flowers will come back in spring!'</p><p>'Exactly!' said grandmother. 'Feelings are like seasons. Sadness comes like winter, but it will pass. Happiness will return like spring. Neither stays forever. That's just how life works.'</p><p><strong>What We Learn:</strong> When you feel sad, remember - this feeling won't last forever. Just like winter passes and spring comes, your sadness will pass too. Be patient with yourself.</p>",
                advancedMeaning: "<p><strong>The Impermanence of Emotions:</strong> This verse teaches a profound truth - all emotional states are temporary. Joy, sorrow, pleasure, pain - all arise from sense-object contact and all pass away.</p><p><strong>Psychological Resilience:</strong> Modern psychology calls this 'emotional regulation' - the ability to ride out difficult emotions knowing they will pass. This verse taught it 5000 years ago.</p><p><strong>Not Suppression:</strong> Krishna doesn't say 'Don't feel sad.' He says 'Tolerate' (titiksha) - meaning experience it, feel it, but don't be consumed by it. Know it will pass.</p><p><strong>Practical Application:</strong> Next time you feel sad, think: 'This is temporary. I've felt happy before, I'll feel happy again. Right now, I'm experiencing sadness. That's okay. It will pass.' This thought doesn't remove sadness immediately, but it prevents despair.</p>"
            }
        ],
        angry: [
            {
                chapter: 2,
                verse: 63,
                sanskrit: "Krodhad bhavati sammohah sammohat smriti vibhramah\nSmriti bhranshat buddhi nasho buddhi nashat pranashyati",
                translation: "From anger arises delusion; from delusion, confused memory; from confused memory, loss of reason; and from loss of reason, one goes to complete ruin.",
                simpleStory: "<h4>The Angry Tiger</h4><p>There was a tiger who got angry very quickly. One day, he got angry at a rock (because he stubbed his toe) and started hitting it. He hurt his paws even more!</p><p>Another day, he got angry at his friend and said mean things. His friend went away and stopped talking to him.</p><p>The tiger realized: when he was angry, he couldn't think clearly. He made bad decisions. He hurt himself and others.</p><p>He learned to count to 10 when feeling angry, take deep breaths, and think before acting.</p><p><strong>What We Learn:</strong> Anger makes us do silly things we regret later. When you feel angry, stop! Take 3 deep breaths. Count to 10. Then decide what to do. Never make decisions when angry.</p>",
                advancedMeaning: "<p><strong>The Chain of Destruction:</strong> This verse outlines how anger destroys us: Anger → Delusion → Memory confusion → Loss of intellect → Total ruin. Each step follows inevitably from the previous one.</p><p><strong>Modern Neuroscience Agreement:</strong> When angry, the amygdala (emotional center) hijacks the prefrontal cortex (rational center). This literally causes confused thinking and poor decisions, exactly as this ancient verse describes.</p><p><strong>Breaking the Chain:</strong> The key is to catch anger early. The moment you notice it arising, pause. Don't act. Anger wants immediate action, but waiting even 10 seconds gives your rational mind time to engage.</p><p><strong>Deeper Cause:</strong> Anger usually comes from frustrated expectations. 'Reality should be different than it is.' The more we practice acceptance of what is, while working to improve it without anger, the less anger arises in the first place.</p>"
            }
        ],
        fearful: [
            {
                chapter: 4,
                verse: 18,
                sanskrit: "Karmany akarma yah pashyed akarmani cha karma yah\nSa buddhiman manushyeshu sa yuktah krisna karma krit",
                translation: "One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities.",
                simpleStory: "<h4>The Brave Little Mouse</h4><p>A little mouse was afraid to leave his hole because he feared the cat might catch him. But if he didn't go out, he couldn't find food!</p><p>His mother said, 'Being brave doesn't mean you're not afraid. It means you do what you must even when you're afraid. Go out carefully, watch for danger, but do your duty of finding food.'</p><p>The mouse realized: he could be afraid AND still act. Being frozen in fear was actually worse than careful, smart action!</p><p><strong>What We Learn:</strong> It's okay to feel afraid sometimes. But don't let fear stop you from doing what you need to do. Act carefully and smartly, but act!</p>",
                advancedMeaning: "<p><strong>Fear and Inaction:</strong> Fear often paralyzes us into inaction. This verse teaches that true wisdom is acting even in the face of fear, and finding stillness even in the midst of action.</p><p><strong>The Paradox:</strong> 'Inaction in action' means performing actions without internal agitation. 'Action in inaction' means that even sitting still, if done with awareness, is a form of action.</p><p><strong>Overcoming Fear:</strong> Fear says 'Don't act!' Wisdom says 'Act intelligently.' The difference: fearful inaction is paralysis. Wise action acknowledges the fear but doesn't let it prevent necessary action.</p><p><strong>Modern Application:</strong> Before a presentation, you might feel fear. Foolish response: cancel the presentation. Wise response: acknowledge the fear, prepare well, then give the presentation anyway. The fear doesn't disappear, but it doesn't control you.</p>"
            }
        ],
        lost: [
            {
                chapter: 3,
                verse: 3,
                sanskrit: "Shri bhagavan uvacha\nLoke smin dvi vidha nishtha pura prokta mayanagha\nJnana yogena sankhyanam karma yogena yoginam",
                translation: "The Supreme Lord said: O sinless one, in this world there are two paths - the path of knowledge for the contemplative, and the path of work for the active.",
                simpleStory: "<h4>Two Paths Up the Mountain</h4><p>Two friends wanted to reach the top of a mountain. One friend liked to study maps, learn about the mountain, and plan the route carefully. The other friend said, 'Let's just start climbing and learn as we go!'</p><p>Both reached the top! One through careful study, one through active doing.</p><p>A wise sage told them, 'There are many paths to the same goal. Some people learn by thinking and studying. Others learn by doing and experiencing. Both are valid. Choose the path that fits YOUR nature.'</p><p><strong>What We Learn:</strong> If you feel lost, remember there's not just one 'right way' to do things. Some people love studying, some love doing. Find YOUR way!</p>",
                advancedMeaning: "<p><strong>The Two Valid Paths:</strong> Krishna describes Jnana Yoga (path of knowledge/contemplation) and Karma Yoga (path of action). Both lead to the same goal.</p><p><strong>For the Lost:</strong> Often we feel lost because we think there's only one right way and we haven't found it. This verse liberates: there are multiple valid paths. Your job is finding which one fits your temperament.</p><p><strong>Jnana Yoga:</strong> Suited for contemplative, analytical minds. They find truth through study, meditation, self-inquiry. Think philosophers, scientists, deep thinkers.</p><p><strong>Karma Yoga:</strong> Suited for active temperaments. They find truth through selfless service, dedicated work, engagement with the world. Think activists, caregivers, hands-on creators.</p><p><strong>Finding Your Path:</strong> Neither is superior. Ask yourself: do I learn better by reading and thinking, or by doing and experiencing? Choose that path without guilt about not choosing the other.</p>"
            }
        ]
    };

    // Current state
    let currentMode = 'emotional';
    let currentFilter = null;
    let currentVerses = [];
    let currentVerseIndex = 0;

    // ==========================================================================
    // Mode Toggle Functions
    // ==========================================================================

    function initModeToggle() {
        const modeButtons = document.querySelectorAll('.mode-btn');

        modeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const mode = this.getAttribute('data-mode');
                switchMode(mode);
            });
        });
    }

    function switchMode(mode) {
        currentMode = mode;

        // Update active button
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

        // Show/hide appropriate filters
        if (mode === 'emotional') {
            document.getElementById('emotional-filters').classList.remove('hidden');
            document.getElementById('chapter-filters').classList.add('hidden');
        } else {
            document.getElementById('emotional-filters').classList.add('hidden');
            document.getElementById('chapter-filters').classList.remove('hidden');
        }

        // Hide verse display
        document.getElementById('verse-display').classList.add('hidden');

        console.log('Switched to mode:', mode);
    }

    // ==========================================================================
    // Filter Selection Functions
    // ==========================================================================

    function initFilters() {
        // Emotional filters
        const emotionButtons = document.querySelectorAll('.filter-btn');
        emotionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const emotion = this.getAttribute('data-emotion');
                selectEmotionalFilter(emotion);
            });
        });

        // Chapter filters
        const chapterButtons = document.querySelectorAll('.chapter-btn');
        chapterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const chapter = this.getAttribute('data-chapter');
                selectChapterFilter(chapter);
            });
        });
    }

    function selectEmotionalFilter(emotion) {
        currentFilter = emotion;
        currentVerses = versesDatabase[emotion] || [];
        currentVerseIndex = 0;

        if (currentVerses.length > 0) {
            showVerseDisplay();
            loadVerse(currentVerseIndex);
        } else {
            alert('No verses available for this emotion yet. More coming soon!');
        }
    }

    function selectChapterFilter(chapter) {
        currentFilter = `Chapter ${chapter}`;
        // TODO: Implement chapter-wise verse loading
        alert(`Chapter ${chapter} - Coming soon! We're adding verses chapter by chapter.`);
    }

    // ==========================================================================
    // Verse Display Functions
    // ==========================================================================

    function showVerseDisplay() {
        // Hide filters
        document.getElementById('emotional-filters').classList.add('hidden');
        document.getElementById('chapter-filters').classList.add('hidden');

        // Show verse display
        document.getElementById('verse-display').classList.remove('hidden');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function loadVerse(index) {
        const verse = currentVerses[index];
        if (!verse) return;

        // Update filter name
        document.getElementById('current-filter').textContent =
            currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);

        // Update verse counter
        document.getElementById('verse-counter').textContent =
            `Verse ${index + 1} of ${currentVerses.length}`;

        // Update verse content
        document.getElementById('verse-sanskrit').innerHTML = verse.sanskrit;
        document.getElementById('verse-reference').textContent =
            `Chapter ${verse.chapter}, Verse ${verse.verse}`;
        document.getElementById('verse-translation').textContent = verse.translation;

        // Update explanations
        document.getElementById('simple-explanation').innerHTML = verse.simpleStory;
        document.getElementById('advanced-explanation').innerHTML = verse.advancedMeaning;

        // Update navigation buttons
        document.getElementById('prev-btn').disabled = (index === 0);
        document.getElementById('next-btn').disabled = (index === currentVerses.length - 1);
    }

    // ==========================================================================
    // Navigation Functions
    // ==========================================================================

    window.nextVerse = function() {
        if (currentVerseIndex < currentVerses.length - 1) {
            currentVerseIndex++;
            loadVerse(currentVerseIndex);
            window.scrollTo({ top: 200, behavior: 'smooth' });
        }
    };

    window.previousVerse = function() {
        if (currentVerseIndex > 0) {
            currentVerseIndex--;
            loadVerse(currentVerseIndex);
            window.scrollTo({ top: 200, behavior: 'smooth' });
        }
    };

    window.backToFilters = function() {
        // Hide verse display
        document.getElementById('verse-display').classList.add('hidden');

        // Show appropriate filters
        if (currentMode === 'emotional') {
            document.getElementById('emotional-filters').classList.remove('hidden');
        } else {
            document.getElementById('chapter-filters').classList.remove('hidden');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ==========================================================================
    // Explanation Tabs
    // ==========================================================================

    function initExplanationTabs() {
        const expTabs = document.querySelectorAll('.exp-tab');

        expTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabName = this.getAttribute('data-tab');

                // Remove active from all
                document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.exp-content').forEach(c => c.classList.remove('active'));

                // Add active to selected
                this.classList.add('active');
                document.getElementById(`${tabName}-explanation`).classList.add('active');
            });
        });
    }

    // ==========================================================================
    // Scroll to Top Button
    // ==========================================================================

    function initScrollToTop() {
        const scrollButton = document.querySelector('.scroll-to-top');

        if (scrollButton) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollButton.style.display = 'flex';
                    scrollButton.style.opacity = '1';
                } else {
                    scrollButton.style.opacity = '0';
                    setTimeout(() => {
                        if (window.pageYOffset <= 300) {
                            scrollButton.style.display = 'none';
                        }
                    }, 300);
                }
            });

            scrollButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // ==========================================================================
    // Initialize Everything
    // ==========================================================================

    document.addEventListener('DOMContentLoaded', function() {
        initModeToggle();
        initFilters();
        initExplanationTabs();
        initScrollToTop();

        console.log('🕉️ Ocean of Bhagavad Gita - Filter System Loaded');
        console.log('📊 Emotional filters available:', Object.keys(versesDatabase).length);
        console.log('🎭 Mode:', currentMode);
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            opacity: 0;
            transition: opacity 0.3s ease;
            display: none;
        }
    `;
    document.head.appendChild(style);

})();
