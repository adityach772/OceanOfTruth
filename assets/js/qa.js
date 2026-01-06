/**
 * Ocean of Bhagavad Gita - Q&A Page JavaScript
 *
 * Guru's Wisdom - Questions and Answers with search and sort
 *
 * @version 1.0.0
 * @author Ocean of Gita Team
 */

(function() {
    'use strict';

    // ==========================================================================
    // Q&A Database
    // ==========================================================================

    let qaDatabase = [
        {
            id: 1,
            question: "Why do I feel unhappy even when I have everything I need?",
            answer: `
                <p>Dear disciple, this is one of the most profound questions of human existence. Material possessions can give temporary pleasure, but not lasting happiness.</p>

                <p><strong>The Nature of Material Happiness:</strong> When you get something new - a toy, a gadget, nice clothes - you feel happy for a while. But soon, that happiness fades. Why? Because material things satisfy only the body and senses, not the soul.</p>

                <p><strong>What the Soul Truly Needs:</strong> Your soul seeks something deeper - purpose, meaning, love, connection, peace. These don't come from possessions but from understanding your true nature, doing meaningful work, serving others, and connecting with the divine.</p>

                <p><strong>The Solution:</strong> True happiness comes from within. When you perform your duties without attachment to results, when you serve others selflessly, when you practice gratitude for what you have rather than craving what you don't - then lasting contentment arises.</p>

                <p>Having everything externally but feeling empty internally is a sign that you're ready to seek deeper truths. That's actually a blessing, not a problem!</p>
            `,
            verse: {
                sanskrit: "Vishaya vinivartante niraharasya dehinah\nRasa varjam raso pyasya param drishtva nivartate",
                reference: "Chapter 2, Verse 59",
                translation: "One can restrain the senses from their objects, but the taste for sense objects remains. This taste also disappears when one experiences a higher taste - the joy of the soul."
            },
            dateAdded: "2026-01-01",
            views: 1245
        },
        {
            id: 2,
            question: "How can I control my anger when someone hurts me?",
            answer: `
                <p>Anger is like a fire that burns first in your own heart before spreading outward. Controlling it requires understanding its root cause.</p>

                <p><strong>Why Anger Arises:</strong> Anger comes from frustrated expectations. You expected someone to behave in a certain way, they didn't, and you feel hurt. This hurt quickly transforms into anger.</p>

                <p><strong>The Immediate Solution:</strong> When anger rises, pause. Don't act. Take three deep breaths. Count to ten. This gives your rational mind time to engage before your emotional mind takes destructive action.</p>

                <p><strong>The Deeper Solution:</strong> Understand that everyone acts according to their own level of understanding and their own past conditioning. The person who hurt you is also struggling with their own pain and ignorance. This doesn't excuse their behavior, but it helps you respond with wisdom rather than react with anger.</p>

                <p><strong>Transform the Energy:</strong> The energy you feel as anger can be transformed. Instead of expressing it harmfully, channel it into constructive action - exercise, creative work, or firm but calm communication about boundaries.</p>

                <p>Remember: holding onto anger is like drinking poison and expecting the other person to die. Release it for your own peace.</p>
            `,
            verse: {
                sanskrit: "Krodhad bhavati sammohah sammohat smriti vibhramah\nSmriti bhranshat buddhi nasho buddhi nashat pranashyati",
                reference: "Chapter 2, Verse 63",
                translation: "From anger comes delusion; from delusion, confused memory; from confused memory, loss of intelligence; and from loss of intelligence, one is ruined."
            },
            dateAdded: "2026-01-02",
            views: 982
        },
        {
            id: 3,
            question: "What should I do when I feel completely lost in life?",
            answer: `
                <p>Feeling lost is not a sign of failure - it's often a sign that you're ready for a deeper journey. Many great spiritual seekers began their path at moments of complete confusion.</p>

                <p><strong>Why We Feel Lost:</strong> We feel lost when the path we're on doesn't align with our deeper truth, or when we're trying to follow someone else's map instead of finding our own way.</p>

                <p><strong>The First Step:</strong> Stop. Don't frantically run in any direction just to feel like you're doing something. Sit with the feeling of being lost. In that stillness, clarity often emerges.</p>

                <p><strong>Ask the Right Questions:</strong> Instead of "What should I do?", ask "Who am I?", "What truly matters to me?", "What brings me alive?" The answers to these questions will reveal your unique path.</p>

                <p><strong>Start Where You Are:</strong> You don't need to see the whole path. You just need to take the next right step. Do today's duty well. Be kind to one person. Learn one new thing. Small, consistent steps create the path as you walk it.</p>

                <p><strong>Remember:</strong> There are many valid paths in life. Some people find themselves through study and contemplation. Others through action and service. Some through art, others through relationships. Trust that your unique combination of interests and talents will reveal your way.</p>
            `,
            verse: {
                sanskrit: "Loke smin dvi vidha nishtha pura prokta mayanagha\nJnana yogena sankhyanam karma yogena yoginam",
                reference: "Chapter 3, Verse 3",
                translation: "In this world, there are two paths: the path of knowledge for the contemplative, and the path of work for the active. Both are valid ways to find your truth."
            },
            dateAdded: "2026-01-03",
            views: 1567
        },
        {
            id: 4,
            question: "Why should I work hard if I won't get the results I want?",
            answer: `
                <p>This question reveals a deep misunderstanding about the nature of action and results. Let me clarify.</p>

                <p><strong>You Control Effort, Not Outcome:</strong> A farmer plants seeds with care, waters them, protects them. But the crop depends on sunshine, rain, soil quality, absence of pests - countless factors beyond his control. What he truly controls is the quality of his planting and care.</p>

                <p><strong>Why Work Hard Then?:</strong> Because the quality of your effort determines the quality of who you become. When a student studies with full focus, even if exam results disappoint, she has become more knowledgeable, more disciplined, more capable. The real result is internal transformation, not external reward.</p>

                <p><strong>The Paradox:</strong> When you work hard without obsessing over results, you actually perform better! Why? Because anxiety about outcomes creates stress, which reduces performance. Focus on process creates presence, which enhances performance.</p>

                <p><strong>Results Come Naturally:</strong> When a musician practices for the love of music rather than fame, the music becomes beautiful - and often fame follows anyway. When a chef cooks with care for each ingredient rather than worrying about reviews, the food becomes excellent - and often great reviews follow.</p>

                <p>Work hard because you can. Work with excellence because that's who you want to be. The results will take care of themselves.</p>
            `,
            verse: {
                sanskrit: "Karmanye vadhikaraste ma phaleshu kadachana\nMa karma phala hetur bhur ma te sangotsva karmani",
                reference: "Chapter 2, Verse 47",
                translation: "You have a right to perform your duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results, and never be attached to not doing your duty."
            },
            dateAdded: "2026-01-04",
            views: 2103
        },
        {
            id: 5,
            question: "How do I stay calm during stressful times?",
            answer: `
                <p>Stress is not caused by external circumstances but by our internal reaction to them. Learning to stay calm is about training the mind.</p>

                <p><strong>Understand What You Can Control:</strong> Most stress comes from trying to control what's uncontrollable. The exam paper's difficulty? Uncontrollable. Your preparation and focus? Controllable. The job interview outcome? Uncontrollable. Your preparation and presentation? Controllable. Put your energy where your power actually lies.</p>

                <p><strong>Practice the Pause:</strong> Between stimulus and response, there's a space. In that space lies your power. When stress arises, pause. Breathe deeply three times. This activates your parasympathetic nervous system and calms your body.</p>

                <p><strong>Zoom Out:</strong> Ask yourself: "Will this matter in 5 years?" Often, what feels overwhelming today will be forgotten tomorrow. This perspective doesn't minimize genuine challenges, but it prevents making molehills into mountains.</p>

                <p><strong>Daily Practice:</strong> Calmness during crisis comes from daily practice during peace. Spend just 10 minutes each day in quiet sitting, focusing on your breath. This trains your mind to be calm, and that training serves you when stress hits.</p>

                <p><strong>Remember:</strong> The ocean's surface has waves, but its depths remain calm. Similarly, life's surface will always have disturbances, but you can cultivate deep inner stillness that remains untouched.</p>
            `,
            verse: {
                sanskrit: "Asanshayam maha baho mano durnigraham chalam\nAbhyasena tu kaunteya vairagyena cha grihyate",
                reference: "Chapter 6, Verse 35",
                translation: "The mind is restless and difficult to control. But it can be trained through practice and detachment."
            },
            dateAdded: "2026-01-05",
            views: 1789
        }
    ];

    let currentSort = 'views'; // or 'date'
    let currentSearch = '';
    let filteredQuestions = [...qaDatabase];

    // ==========================================================================
    // Display Functions
    // ==========================================================================

    function displayQuestionsList() {
        const questionsListDiv = document.getElementById('questions-list');

        if (filteredQuestions.length === 0) {
            questionsListDiv.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><br>No questions found matching your search.</div>';
            return;
        }

        let html = '';
        filteredQuestions.forEach(qa => {
            html += `
                <div class="question-item" onclick="openQuestion(${qa.id})">
                    <div class="question-content">
                        <h3 class="question-title">${qa.question}</h3>
                        <div class="question-meta">
                            <span class="meta-item">
                                <i class="fas fa-eye"></i> ${qa.views} views
                            </span>
                            <span class="meta-item">
                                <i class="fas fa-calendar"></i> ${formatDate(qa.dateAdded)}
                            </span>
                        </div>
                    </div>
                    <div class="question-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            `;
        });

        questionsListDiv.innerHTML = html;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // ==========================================================================
    // Search and Sort Functions
    // ==========================================================================

    window.searchQuestions = function() {
        currentSearch = document.getElementById('search-input').value.toLowerCase();
        filterAndSortQuestions();
    };

    window.sortQuestions = function() {
        currentSort = document.getElementById('sort-select').value;
        filterAndSortQuestions();
    };

    function filterAndSortQuestions() {
        // Filter by search
        if (currentSearch) {
            filteredQuestions = qaDatabase.filter(qa =>
                qa.question.toLowerCase().includes(currentSearch) ||
                qa.answer.toLowerCase().includes(currentSearch)
            );
        } else {
            filteredQuestions = [...qaDatabase];
        }

        // Sort
        if (currentSort === 'views') {
            filteredQuestions.sort((a, b) => b.views - a.views);
        } else if (currentSort === 'date') {
            filteredQuestions.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }

        displayQuestionsList();
    }

    // ==========================================================================
    // Question Detail Functions
    // ==========================================================================

    window.openQuestion = function(questionId) {
        const qa = qaDatabase.find(q => q.id === questionId);
        if (!qa) return;

        // Increment view count
        qa.views++;

        // Hide list, show detail
        document.getElementById('qa-list-section').classList.add('hidden');
        document.getElementById('qa-detail-section').classList.remove('hidden');

        // Populate detail view
        document.getElementById('detail-question').textContent = qa.question;
        document.getElementById('view-count-text').textContent = qa.views;
        document.getElementById('detail-answer').innerHTML = qa.answer;

        // Show verse if available
        const verseDiv = document.getElementById('related-verse');
        if (qa.verse) {
            verseDiv.innerHTML = `
                <p class="verse-label-qa">Related Verse from Bhagavad Gita:</p>
                <p class="verse-sanskrit-qa">${qa.verse.sanskrit}</p>
                <p class="verse-reference-qa">${qa.verse.reference}</p>
                <p class="verse-translation-qa"><strong>${qa.verse.translation}</strong></p>
            `;
            verseDiv.classList.remove('hidden');
        } else {
            verseDiv.classList.add('hidden');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update the list to reflect new view count
        filterAndSortQuestions();
    };

    window.backToQuestions = function() {
        // Hide detail, show list
        document.getElementById('qa-detail-section').classList.add('hidden');
        document.getElementById('qa-list-section').classList.remove('hidden');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ==========================================================================
    // Initialize
    // ==========================================================================

    document.addEventListener('DOMContentLoaded', function() {
        // Initial display
        filterAndSortQuestions();

        console.log('🙏 Guru\'s Wisdom Q&A System Loaded');
        console.log('📝 Total Questions:', qaDatabase.length);
    });

})();
