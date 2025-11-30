// src/data/dummyData.js

export const lessons = [
  {
    id: "1",
    title: "Introduction to Data Breaches",
    slug: "intro-to-data-breaches",
    excerpt:
      "Learn what data breaches are, how they happen, and why they pose major risks to individuals and organizations.",
    time: "12 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Is a Data Breach?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            A <strong>data breach</strong> is a security incident in which sensitive, confidential, or protected information is accessed, disclosed, or stolen by an unauthorized individual.  
            This may include personal data (such as names, passwords, financial details), corporate secrets, intellectual property, or government-classified information.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Why Do Data Breaches Matter?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Data breaches can have severe consequences — both for individuals and organizations.  
            They often lead to financial loss, identity theft, reputational damage, legal penalties, and long-term security risks.  
            Even a single leaked password can expose entire systems.
          </p>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: 2017 Equifax Breach</h3>
            <p class="text-neutral-300 leading-relaxed">
              One of the largest breaches in history exposed the personal details of over <strong>147 million people</strong>, including
              Social Security numbers, birth dates, and credit information.  
              It occurred due to an <strong>unpatched software vulnerability</strong>.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">How Do Data Breaches Happen?</h2>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Weak or stolen passwords:</strong> Attackers use brute force, credential stuffing, or leaked passwords.</li>
            <li><strong>Phishing attacks:</strong> Users are tricked into revealing their login credentials.</li>
            <li><strong>Malware infections:</strong> Malicious software steals data or installs backdoors.</li>
            <li><strong>Software vulnerabilities:</strong> Unpatched systems allow unauthorized access.</li>
            <li><strong>Insider threats:</strong> Employees intentionally or unintentionally leak information.</li>
            <li><strong>Misconfigured servers or cloud storage:</strong> Publicly exposed databases are common causes.</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Impact of Data Breaches</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            The impact of a breach can be immediate or long-lasting.  
            Even after an incident is resolved, stolen data can circulate on the dark web for years.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Financial loss due to fraud or recovery costs</li>
            <li>Loss of customer trust</li>
            <li>Legal consequences and fines (GDPR, HIPAA, etc.)</li>
            <li>Business downtime and operational disruptions</li>
            <li>Long-term exposure of personal data</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Data breaches are one of the most serious cybersecurity threats today.  
            Understanding how they happen — and how attackers exploit weaknesses — is the first step toward protecting yourself and your organization.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "What is a data breach?",
              choices: [
                "Unauthorized access to sensitive information",
                "Deleting old files from a computer",
                "Updating system software",
                "Sharing data internally within a team"
              ],
              answerIndex: 0
            },
            {
              id: "q2",
              text: "Which of the following can cause a data breach?",
              choices: [
                "Weak passwords",
                "Phishing attacks",
                "Unpatched vulnerabilities",
                "All of the above"
              ],
              answerIndex: 3
            },
            {
              id: "q3",
              text: "True or False: Data breaches only occur due to external attackers.",
              choices: ["True", "False"],
              answerIndex: 1
            },
            {
              id: "q4",
              text: "Which of the following is considered sensitive data?",
              choices: [
                "Email address only",
                "Password and bank details",
                "Public social media posts",
                "Website layout"
              ],
              answerIndex: 1
            },
            {
              id: "q5",
              text: "What is a common consequence of a data breach?",
              choices: [
                "Faster system performance",
                "Identity theft",
                "Better customer trust",
                "Automatic password updates"
              ],
              answerIndex: 1
            },
            {
              id: "q6",
              text: "Which attack technique is commonly used to steal login credentials?",
              choices: ["Phishing", "Data compression", "Ad blocking", "Cloud syncing"],
              answerIndex: 0
            },
            {
              id: "q7",
              text: "Which of the following can expose data unintentionally?",
              choices: [
                "Misconfigured cloud storage",
                "Encrypted databases only",
                "Closing unused apps",
                "Using strong passwords"
              ],
              answerIndex: 0
            },
            {
              id: "q8",
              text: "Which vulnerability allowed attackers to penetrate the Equifax system?",
              choices: [
                "Unpatched software",
                "Power outage",
                "Incorrect file naming",
                "Slow network speed"
              ],
              answerIndex: 0
            },
            {
              id: "q9",
              text: "What can happen to stolen data after a breach?",
              choices: [
                "It disappears automatically",
                "It circulates on the dark web for years",
                "It becomes harmless",
                "It gets encrypted for protection"
              ],
              answerIndex: 1
            },
            {
              id: "q10",
              text: "Which of the following helps prevent data breaches?",
              choices: [
                "Using strong, unique passwords",
                "Ignoring software updates",
                "Clicking unknown email links",
                "Storing passwords in plain text"
              ],
              answerIndex: 0
            }
          ]
          ,
  },

  {
    id: "2",
    title: "Phishing & Social Engineering",
    slug: "phishing-attacks",
    excerpt:
      "Learn how attackers trick people through deceptive communication techniques and psychological manipulation.",
    time: "15 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Is Phishing?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            <strong>Phishing</strong> is a type of social engineering attack where cybercriminals try to trick users into revealing sensitive information such as passwords, banking details, or personal data.  
            These attacks typically appear as legitimate emails, messages, or calls but are designed to deceive and manipulate victims.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">How Phishing Works</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            The attacker pretends to be a trusted entity — like a bank, company, or coworker — and uses psychological manipulation to create a sense of urgency, fear, or curiosity.  
            This pressure causes users to act quickly without verifying authenticity.
          </p>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: 2020 Twitter Celebrity Hack</h3>
            <p class="text-neutral-300 leading-relaxed">
              Attackers conducted a <strong>phone-based social engineering attack</strong> to trick Twitter employees into giving internal system access.  
              This allowed hackers to take over verified accounts, including those of <strong>Elon Musk, Bill Gates, and Apple</strong>, and tweet fraudulent cryptocurrency messages.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">Common Types of Phishing</h2>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Email Phishing:</strong> Fake emails designed to steal login credentials or deliver malware.</li>
            <li><strong>SMS Phishing (Smishing):</strong> Text messages that impersonate banks, delivery companies, etc.</li>
            <li><strong>Voice Phishing (Vishing):</strong> Phone calls from attackers pretending to be officials or support agents.</li>
            <li><strong>Spear Phishing:</strong> Highly targeted attacks on specific individuals using personalized information.</li>
            <li><strong>Link Manipulation:</strong> URLs disguised as legitimate websites to capture passwords.</li>
            <li><strong>Fake Websites or Login Pages:</strong> Cloned pages that record everything you type.</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Signs of a Phishing Attempt</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Unexpected emails or messages asking for personal information.</li>
            <li>Poor grammar, spelling mistakes, or unusual tone.</li>
            <li>Suspicious links or attachments.</li>
            <li>Urgent requests like “Your account will be locked!”</li>
            <li>Sender address that looks similar but slightly altered.</li>
            <li>Too-good-to-be-true offers or prizes.</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Why Phishing Is Dangerous</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Successful phishing attacks can lead to severe consequences. A single compromised account can expose entire networks and systems.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Unauthorized access to sensitive data</li>
            <li>Identity theft or financial fraud</li>
            <li>Malware installation (ransomware, spyware, keyloggers)</li>
            <li>Corporate data breaches</li>
            <li>Loss of money, reputation, and privacy</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Protect Yourself</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Always verify email senders before clicking links or downloading attachments.</li>
            <li>Enable two-factor authentication (2FA) wherever possible.</li>
            <li>Use strong, unique passwords for every account.</li>
            <li>Never share OTPs, passwords, or personal info with anyone.</li>
            <li>Check the URL carefully before logging in.</li>
            <li>Report suspicious messages to your security team or email provider.</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Phishing attacks rely on human psychology rather than technical skill.  
            Understanding the warning signs and practicing good digital hygiene significantly reduces your chances of falling victim.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "Phishing usually happens through?",
              choices: ["Emails", "Text messages", "Phone calls", "All of the above"],
              answerIndex: 3
            },
            {
              id: "q2",
              text: "What is the main goal of phishing?",
              choices: [
                "Gain unauthorized access to sensitive data",
                "To clean your inbox",
                "To help users",
                "None of the above"
              ],
              answerIndex: 0
            },
            {
              id: "q3",
              text: "Which of the following is a sign of a phishing attack?",
              choices: [
                "Unexpected request for sensitive information",
                "Perfect grammar and official tone",
                "Only messages from known contacts",
                "Slow internet connection"
              ],
              answerIndex: 0
            },
            {
              id: "q4",
              text: "What type of phishing targets specific individuals with personalized details?",
              choices: ["Mass phishing", "Spear phishing", "Vishing", "Smishing"],
              answerIndex: 1
            },
            {
              id: "q5",
              text: "Vishing refers to phishing via:",
              choices: ["Phone calls", "Emails", "Browser pop-ups", "USB devices"],
              answerIndex: 0
            },
            {
              id: "q6",
              text: "A fake login page designed to steal credentials is an example of:",
              choices: [
                "Spoofed authentication",
                "Code optimization",
                "System tuning",
                "Data compression"
              ],
              answerIndex: 0
            },
            {
              id: "q7",
              text: "Which feeling do attackers commonly try to exploit in phishing messages?",
              choices: ["Calmness", "Urgency or fear", "Happiness", "Boredom"],
              answerIndex: 1
            },
            {
              id: "q8",
              text: "In the 2020 Twitter hack, attackers used:",
              choices: [
                "A database vulnerability",
                "Phone-based social engineering",
                "A hardware keylogger",
                "Broken authentication"
              ],
              answerIndex: 1
            },
            {
              id: "q9",
              text: "Which action helps protect against phishing?",
              choices: [
                "Clicking links without checking",
                "Enabling two-factor authentication",
                "Using the same password everywhere",
                "Ignoring suspicious emails"
              ],
              answerIndex: 1
            },
            {
              id: "q10",
              text: "Smishing refers to phishing through?",
              choices: ["Email", "SMS/text messages", "Phone calls", "Browser extensions"],
              answerIndex: 1
            }
          ]
          ,
  },

  {
    id: "3",
    title: "Weak Passwords & Credential Theft",
    slug: "weak-passwords",
    excerpt:
      "How attackers steal credentials and how you can protect your accounts with strong, secure authentication.",
    time: "10 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">Why Weak Passwords Are Dangerous</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Weak or reused passwords are one of the most common reasons attackers gain access to user accounts.  
            Many people still use predictable passwords like <strong>"123456"</strong> or <strong>"password"</strong>, which can be cracked instantly.  
            Once a password is exposed, attackers can break into emails, social media, banking apps, and even corporate systems.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">How Attackers Steal Passwords</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Cybercriminals use several techniques to obtain user credentials.  
            These methods don’t require high-level hacking — they exploit human behavior and predictable choices.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Brute Force Attacks:</strong> Automatically trying thousands of password combinations until one works.</li>
            <li><strong>Dictionary Attacks:</strong> Using lists of common passwords like "123456", "qwerty", or "iloveyou".</li>
            <li><strong>Credential Stuffing:</strong> Attackers use passwords leaked from one website to break into other websites.</li>
            <li><strong>Phishing:</strong> Trick users into typing their passwords into fake websites or forms.</li>
            <li><strong>Keyloggers:</strong> Malware that records everything a user types.</li>
            <li><strong>Public Wi-Fi Attacks:</strong> Intercepting passwords typed on unsecured networks.</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: RockYou Password Leak</h3>
            <p class="text-neutral-300 leading-relaxed">
              In the RockYou breach, over <strong>32 million passwords</strong> were leaked.  
              Most of them were incredibly weak — like "123456" or "abc123".  
              This breach became one of the largest sources of password dictionaries used by hackers worldwide.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">Characteristics of Strong Passwords</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            A strong password is difficult to guess and resistant to brute-force attacks.  
            It should be <strong>unique</strong>, <strong>long</strong>, and <strong>hard to predict</strong>.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>At least 12–16 characters long</li>
            <li>Includes uppercase and lowercase letters</li>
            <li>Contains numbers and special characters</li>
            <li>Not based on personal info (like birthdays or names)</li>
            <li>Used only for one account (never reused)</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Password Managers</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Memorizing many complex passwords is difficult.  
            Password managers securely store credentials and generate strong passwords for every website.  
            This reduces the risk of reuse and ensures every password is unique.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Multi-Factor Authentication (MFA)</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Even if an attacker somehow gets your password, MFA can stop them.  
            It requires a second form of verification — such as an OTP, authenticator app, or biometric.  
            With MFA enabled, a stolen password alone is not enough.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Weak passwords make it extremely easy for attackers to break into accounts.  
            Use strong, unique passwords, enable multi-factor authentication, and consider using a password manager to stay protected.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "Which password is the strongest?",
              choices: ["123456", "qwerty", "P@ssw0rd2024!"],
              answerIndex: 2
            },
            {
              id: "q2",
              text: "What is credential stuffing?",
              choices: [
                "Trying random passwords manually",
                "Using leaked passwords from one site to log into other sites",
                "Guessing passwords based on birthdays"
              ],
              answerIndex: 1
            },
            {
              id: "q3",
              text: "What is the best way to manage many unique passwords?",
              choices: [
                "Write them on paper",
                "Use the same password everywhere",
                "Use a password manager"
              ],
              answerIndex: 2
            },
            {
              id: "q4",
              text: "Which attack tries thousands of password combinations automatically?",
              choices: ["Social engineering", "Brute force attack", "DNS poisoning"],
              answerIndex: 1
            },
            {
              id: "q5",
              text: "What makes a password weak?",
              choices: [
                "Short and predictable patterns",
                "Long and unique characters",
                "Mixture of special symbols"
              ],
              answerIndex: 0
            },
            {
              id: "q6",
              text: "Which of the following is an example of a dictionary attack?",
              choices: [
                "Trying passwords from a list of common words",
                "Using malware to steal passwords",
                "Guessing random characters"
              ],
              answerIndex: 0
            },
            {
              id: "q7",
              text: "Why should you avoid reusing passwords?",
              choices: [
                "It makes them harder to remember",
                "A breach on one site can give attackers access everywhere",
                "It slows down your device"
              ],
              answerIndex: 1
            },
            {
              id: "q8",
              text: "What does MFA (Multi-Factor Authentication) provide?",
              choices: [
                "A second layer of security",
                "Faster login process",
                "Automatic password generation"
              ],
              answerIndex: 0
            },
            {
              id: "q9",
              text: "Which of the following is a secure password characteristic?",
              choices: [
                "Based on personal information",
                "Short and simple",
                "At least 12–16 characters long"
              ],
              answerIndex: 2
            },
            {
              id: "q10",
              text: "Keyloggers are used to:",
              choices: ["Record keystrokes", "Improve typing speed", "Detect malware"],
              answerIndex: 0
            }
          ]
          ,
  },
  {
    id: "4",
    title: "Ransomware Attacks",
    slug: "ransomware-attacks",
    excerpt:
      "Understand how ransomware encrypts data, spreads across systems, and how to defend against it.",
    time: "20 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Is Ransomware?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            <strong>Ransomware</strong> is a type of malicious software that encrypts your files or locks your system, making the data inaccessible.  
            The attacker then demands a ransom — usually in cryptocurrency — in exchange for restoring access.  
            Even after payment, there is <strong>no guarantee</strong> that files will be recovered.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">How Ransomware Works</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Ransomware typically infiltrates a system through malicious downloads, phishing emails, or exploiting system vulnerabilities.  
            Once inside, it rapidly spreads across the device or network, encrypting important files and displaying a ransom note.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Infection:</strong> The device is compromised through phishing or malware.</li>
            <li><strong>Encryption:</strong> Files are locked using strong cryptographic algorithms.</li>
            <li><strong>Demand:</strong> A ransom message appears, demanding payment in exchange for a decryption key.</li>
            <li><strong>Threat:</strong> Attackers may threaten to leak data if the ransom isn’t paid.</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: WannaCry 2017 Attack</h3>
            <p class="text-neutral-300 leading-relaxed">
              The <strong>WannaCry ransomware</strong> attack impacted over <strong>230,000 computers</strong> in 150+ countries.  
              It exploited a Windows vulnerability called <strong>EternalBlue</strong>.  
              Hospitals, telecom companies, and government institutions were severely disrupted.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">Types of Ransomware</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Crypto Ransomware:</strong> Encrypts personal and business files.</li>
            <li><strong>Locker Ransomware:</strong> Locks the entire operating system, blocking normal use.</li>
            <li><strong>Double Extortion:</strong> Attackers steal data before encrypting it and threaten to leak it.</li>
            <li><strong>RaaS (Ransomware-as-a-Service):</strong> Cybercriminals rent ransomware to others for profit.</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How Ransomware Spreads</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Phishing emails with infected attachments</li>
            <li>Malicious software downloads</li>
            <li>Unpatched operating systems or outdated software</li>
            <li>Weak Remote Desktop Protocol (RDP) passwords</li>
            <li>Malvertising (malicious ads)</li>
            <li>Infected USB devices</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Impact of Ransomware</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Ransomware causes major financial and operational damage.  
            Recovery can take days, weeks, or even months depending on the severity.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Loss of critical data</li>
            <li>Business downtime and service disruptions</li>
            <li>Costly ransom payments</li>
            <li>Reputational damage</li>
            <li>Legal and regulatory consequences</li>
            <li>Data leaks (in double extortion attacks)</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Protect Yourself</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Keep systems and software updated regularly</li>
            <li>Avoid clicking suspicious links or downloading unknown attachments</li>
            <li>Use strong endpoint security and firewalls</li>
            <li>Back up important data frequently (offline and cloud backups)</li>
            <li>Disable macros in documents unless absolutely necessary</li>
            <li>Use unique, strong passwords for remote access systems</li>
            <li>Educate employees about common phishing techniques</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">What To Do If You Are Hit by Ransomware</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Disconnect the infected device from the network immediately</li>
            <li>Do NOT pay the ransom — it encourages attackers and provides no guarantee</li>
            <li>Report the incident to your cybersecurity team or authorities</li>
            <li>Use backups to restore lost data</li>
            <li>Scan systems thoroughly to remove remaining malware</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Ransomware is one of the most damaging cyber threats today.  
            Understanding how it spreads — and taking preventive steps — is the best defense against losing important data or facing costly downtime.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "Ransomware encrypts files to?",
              choices: ["Sell them", "Demand payment", "Delete them"],
              answerIndex: 1
            },
            {
              id: "q2",
              text: "What major vulnerability was exploited by the WannaCry ransomware?",
              choices: ["EternalBlue", "Heartbleed", "Shellshock"],
              answerIndex: 0
            },
            {
              id: "q3",
              text: "What is the safest response to a ransomware attack?",
              choices: [
                "Pay the ransom quickly",
                "Disconnect the device and restore from backups",
                "Close the pop-up"
              ],
              answerIndex: 1
            },
            {
              id: "q4",
              text: "Ransomware often spreads through?",
              choices: ["Phishing emails", "Strong firewalls", "Encrypted USB drives"],
              answerIndex: 0
            },
            {
              id: "q5",
              text: "What does 'double extortion' mean?",
              choices: [
                "Encrypting twice",
                "Stealing data and threatening to leak it",
                "Charging double ransom"
              ],
              answerIndex: 1
            },
            {
              id: "q6",
              text: "Ransomware-as-a-Service (RaaS) refers to:",
              choices: [
                "A legal cloud backup solution",
                "Ransomware rented to other criminals",
                "Anti-ransomware software"
              ],
              answerIndex: 1
            },
            {
              id: "q7",
              text: "Which type of ransomware locks the entire operating system?",
              choices: ["Crypto ransomware", "Locker ransomware", "Browser malware"],
              answerIndex: 1
            },
            {
              id: "q8",
              text: "Which is a common impact of ransomware?",
              choices: [
                "Faster system performance",
                "Business downtime and financial loss",
                "Automatic data cleanup"
              ],
              answerIndex: 1
            },
            {
              id: "q9",
              text: "What is a good prevention method for ransomware?",
              choices: [
                "Ignoring software updates",
                "Regular data backups",
                "Opening all email attachments"
              ],
              answerIndex: 1
            },
            {
              id: "q10",
              text: "Should victims pay the ransom?",
              choices: [
                "Yes, always",
                "No, because it encourages attackers and doesn’t guarantee recovery",
                "Only if the attacker is polite"
              ],
              answerIndex: 1
            }
          ]
          ,
  },
  {
    id: "5",
    title: "Insider Threats",
    slug: "insider-threats",
    excerpt:
      "Understand how employees, contractors, or trusted individuals can unintentionally or intentionally put an organization at risk.",
    time: "14 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Are Insider Threats?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            An <strong>insider threat</strong> refers to security risks that come from individuals within an organization — such as employees, contractors, vendors, or partners — who have legitimate access to systems and data.  
            These insiders may misuse their access intentionally or unintentionally, leading to data breaches, financial loss, or operational damage.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Types of Insider Threats</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Insider threats are not always caused by malicious intent.  
            In many cases, human error or negligence plays a major role.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Malicious Insiders:</strong> Individuals who intentionally steal, misuse, or sabotage data for financial gain, revenge, or personal benefit.</li>
            <li><strong>Negligent Insiders:</strong> Employees who accidentally expose data through weak passwords, misconfigurations, or careless behavior.</li>
            <li><strong>Compromised Insiders:</strong> Legitimate accounts taken over by external attackers (often through phishing or credential theft).</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: Edward Snowden Leak</h3>
            <p class="text-neutral-300 leading-relaxed">
              In 2013, Edward Snowden, a contractor at the NSA, used his authorized access to leak highly confidential documents.  
              This incident remains one of the most well-known insider threats in history, showing how powerful internal access can be if misused.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">Common Causes of Insider Incidents</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Weak access controls or excessive permissions</li>
            <li>Poor cybersecurity awareness and training</li>
            <li>Phishing attacks leading to compromised accounts</li>
            <li>Unmonitored or outdated systems</li>
            <li>Lack of regular audits or security checks</li>
            <li>Employee dissatisfaction or conflicts</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Warning Signs of Insider Threats</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Insider attacks often show behavioral or technical warning indicators.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Accessing files or systems unrelated to their job role</li>
            <li>Attempting to bypass security controls</li>
            <li>Unusual data transfers or downloads</li>
            <li>Frequent policy violations</li>
            <li>Sudden behavioral changes (anger, dissatisfaction, secrecy)</li>
            <li>Logging in at unusual times or from unusual locations</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Prevent Insider Threats</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Use the principle of <strong>least privilege</strong> — employees only get access they truly need.</li>
            <li>Implement strong monitoring and log analysis.</li>
            <li>Require multi-factor authentication for sensitive systems.</li>
            <li>Provide regular cybersecurity awareness training.</li>
            <li>Perform background checks during hiring.</li>
            <li>Encrypt sensitive files and enforce secure access rules.</li>
            <li>Conduct regular access reviews and permission audits.</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Insider threats are one of the most challenging cybersecurity risks because they originate from trusted individuals.  
            A combination of strong access control, employee education, and continuous monitoring is essential to minimize these risks.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "Insider threats can be:",
              choices: ["Accidental", "Malicious", "Both"],
              answerIndex: 2
            },
            {
              id: "q2",
              text: "Which type of insider accidentally exposes data through mistakes?",
              choices: ["Malicious insider", "Negligent insider", "Compromised insider"],
              answerIndex: 1
            },
            {
              id: "q3",
              text: "Which principle helps prevent insiders from accessing unnecessary data?",
              choices: ["Zero Trust", "Least Privilege", "Open Access"],
              answerIndex: 1
            },
            {
              id: "q4",
              text: "Who is considered an insider?",
              choices: [
                "Employees",
                "Contractors and vendors",
                "Partners with access",
                "All of the above"
              ],
              answerIndex: 3
            },
            {
              id: "q5",
              text: "Which of the following is a common sign of insider threat behavior?",
              choices: [
                "Accessing systems unrelated to their job",
                "Slow internet connection",
                "Using dark mode",
                "Asking for training"
              ],
              answerIndex: 0
            },
            {
              id: "q6",
              text: "What is a compromised insider?",
              choices: [
                "Someone intentionally attacking the company",
                "A user whose account is taken over by an attacker",
                "An employee who quits their job"
              ],
              answerIndex: 1
            },
            {
              id: "q7",
              text: "Which of these can lead to insider incidents?",
              choices: [
                "Weak access controls",
                "Lack of security awareness",
                "Employee dissatisfaction",
                "All of the above"
              ],
              answerIndex: 3
            },
            {
              id: "q8",
              text: "Which of the following helps detect insider threats?",
              choices: [
                "Monitoring logs and user activity",
                "Ignoring unusual behavior",
                "Disabling all passwords",
                "Allowing open access"
              ],
              answerIndex: 0
            },
            {
              id: "q9",
              text: "What is a common motivation for malicious insiders?",
              choices: ["Boredom", "Financial gain or revenge", "Fixing bugs"],
              answerIndex: 1
            },
            {
              id: "q10",
              text: "Which measure helps prevent insider threats?",
              choices: [
                "Performing regular permission audits",
                "Giving every employee admin access",
                "Avoiding background checks"
              ],
              answerIndex: 0
            }
          ]
          ,
  },
  {
    id: "6",
    title: "Cloud Misconfigurations",
    slug: "cloud-misconfigurations",
    excerpt:
      "Incorrect cloud configurations can accidentally expose sensitive data or systems to attackers.",
    time: "18 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Are Cloud Misconfigurations?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            <strong>Cloud misconfigurations</strong> happen when cloud services such as databases, storage buckets, or virtual machines are set up incorrectly.  
            These mistakes can accidentally make sensitive data publicly accessible or weaken security controls, leading to major breaches.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Why Misconfigurations Happen</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Companies move fast, deploy resources quickly, and often lack proper cloud expertise.  
            As a result, simple setup mistakes can create massive vulnerabilities.  
            Attackers frequently scan the internet for misconfigured cloud services and exploit them within minutes.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Common Cloud Misconfigurations</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Publicly accessible storage buckets</strong> (AWS S3, GCP Buckets, Azure Blobs)</li>
            <li><strong>Open ports</strong> on cloud servers that allow unauthorized access</li>
            <li><strong>No access restrictions</strong> on sensitive APIs</li>
            <li><strong>Weak IAM roles or permissions</strong> that provide excessive access</li>
            <li><strong>Unencrypted databases</strong> or unprotected backups</li>
            <li><strong>Misconfigured security groups</strong> that allow inbound traffic from anywhere</li>
            <li><strong>Forgotten test environments</strong> left exposed on the internet</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: Capital One AWS Breach (2019)</h3>
            <p class="text-neutral-300 leading-relaxed">
              A misconfigured AWS firewall allowed a hacker to access sensitive information of over  
              <strong>100 million customers.</strong>  
              The attacker exploited overly-permissive IAM roles to retrieve confidential data from cloud storage.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">Impact of Cloud Misconfigurations</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Cloud misconfigurations can cause large-scale breaches and financial loss, especially because cloud systems often store massive amounts of data.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Public exposure of sensitive data</li>
            <li>Unauthorized access to internal systems</li>
            <li>Account takeovers through leaked credentials</li>
            <li>Data deletion or manipulation</li>
            <li>Service downtime and business disruptions</li>
            <li>Regulatory penalties and reputational damage</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Prevent Cloud Misconfigurations</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Enable <strong>private access</strong> to storage buckets by default</li>
            <li>Follow the <strong>principle of least privilege</strong> for IAM roles</li>
            <li>Regularly scan cloud environments for misconfigurations</li>
            <li>Use security tools such as AWS Config, GCP Security Command Center, or Azure Defender</li>
            <li>Encrypt all stored and transmitted data</li>
            <li>Disable unused ports and restrict inbound traffic</li>
            <li>Implement automated compliance policies</li>
            <li>Train teams in cloud security and best practices</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Cloud misconfigurations are one of the most common causes of modern data breaches.  
            With proper access control, monitoring tools, and security best practices, organizations can significantly reduce the risk of exposing sensitive information.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "Misconfigured cloud storage can:",
              choices: ["Expose data publicly", "Improve performance", "Reduce security"],
              answerIndex: 0
            },
            {
              id: "q2",
              text: "Which principle helps restrict unnecessary cloud permissions?",
              choices: ["Least Privilege", "Full Access", "Open Cloud"],
              answerIndex: 0
            },
            {
              id: "q3",
              text: "Which of these is a common misconfiguration?",
              choices: ["Private cloud buckets", "Publicly open S3 buckets", "Encrypted databases only"],
              answerIndex: 1
            },
            {
              id: "q4",
              text: "What allowed the Capital One attacker to access sensitive data?",
              choices: [
                "Strong encryption",
                "Overly-permissive IAM roles",
                "Frequent password changes"
              ],
              answerIndex: 1
            },
            {
              id: "q5",
              text: "Which cloud resource is commonly exposed accidentally?",
              choices: ["Temporary logs", "S3 buckets / Cloud storage", "Desktop wallpapers"],
              answerIndex: 1
            },
            {
              id: "q6",
              text: "A common cause of cloud misconfigurations is:",
              choices: [
                "Rushed deployments and lack of expertise",
                "High-quality training programs",
                "Encrypted backups"
              ],
              answerIndex: 0
            },
            {
              id: "q7",
              text: "What can attackers do when cloud services are misconfigured?",
              choices: [
                "Access or steal data",
                "Improve system performance",
                "Speed up backups"
              ],
              answerIndex: 0
            },
            {
              id: "q8",
              text: "Which tool helps detect misconfigurations?",
              choices: [
                "AWS Config / GCP Security Command Center",
                "A text editor",
                "A wallpaper app"
              ],
              answerIndex: 0
            },
            {
              id: "q9",
              text: "Which of the following increases misconfiguration risk?",
              choices: [
                "Automated compliance checks",
                "Regular auditing",
                "Forgotten test environments left online"
              ],
              answerIndex: 2
            },
            {
              id: "q10",
              text: "Which of the following helps prevent cloud misconfigurations?",
              choices: [
                "Disabling monitoring",
                "Restricting inbound traffic and closing unused ports",
                "Allowing public access for convenience"
              ],
              answerIndex: 1
            }
          ]
          ,
  },
  {
    id: "7",
    title: "Malware & Keyloggers",
    slug: "malware-keyloggers",
    excerpt:
      "Understand how malware works and how keyloggers secretly capture your keystrokes.",
    time: "17 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Is Malware?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            <strong>Malware</strong> (malicious software) refers to any software designed to harm, exploit, or steal information from a device.  
            This includes viruses, worms, ransomware, spyware, and keyloggers.  
            Malware can infect computers through downloads, email attachments, malicious websites, or USB devices.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">What Are Keyloggers?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            A <strong>keylogger</strong> is a type of spyware that secretly records every keystroke a user types.  
            This includes passwords, messages, card numbers, and personal information.  
            Keyloggers often run silently in the background, making them very difficult to detect.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">How Keyloggers Work</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Keyloggers capture keystrokes as the user types and send the collected data to an attacker.  
            They may also log clipboard activity, screenshots, or browser activity depending on the type.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Software Keyloggers:</strong> Installed through malware or malicious downloads.</li>
            <li><strong>Hardware Keyloggers:</strong> Small physical devices placed between the keyboard and the computer.</li>
            <li><strong>Browser-based Keyloggers:</strong> Injected scripts that record data typed in web forms.</li>
            <li><strong>Kernel-level Keyloggers:</strong> Built into the operating system through exploit techniques.</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: Zeus Banking Trojan</h3>
            <p class="text-neutral-300 leading-relaxed">
              The <strong>Zeus malware</strong> infected millions of devices worldwide.  
              It included a powerful keylogger that stole online banking credentials, helping attackers commit large-scale financial fraud.  
              Zeus remains one of the most widely known keylogger-based attacks.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">How Keyloggers Spread</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Phishing emails with infected attachments</li>
            <li>Malicious software downloads or cracked apps</li>
            <li>Fake browser extensions or plugins</li>
            <li>Drive-by downloads from compromised websites</li>
            <li>USB devices infected with autorun malware</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Signs of a Keylogger Infection</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Keyloggers are designed to stay hidden, but a few subtle signs may appear.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Unusual laptop/PC lag or delayed typing</li>
            <li>Unknown processes running in the background</li>
            <li>Browser pop-ups or strange extensions</li>
            <li>High network usage with no obvious reason</li>
            <li>Unexpected system crashes</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Protect Yourself</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Install reputable antivirus/anti-malware software</li>
            <li>Keep your operating system and apps updated</li>
            <li>Avoid downloading cracked or unknown software</li>
            <li>Do not click suspicious links or email attachments</li>
            <li>Use two-factor authentication (2FA) for sensitive accounts</li>
            <li>Use a password manager to auto-fill passwords (keyloggers can't record autofill)</li>
            <li>Regularly check installed programs and browser extensions</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Keyloggers are one of the most dangerous forms of spyware because they directly capture your most sensitive information.  
            With strong security practices, regular updates, and careful online behavior, users can stay protected from malware infections and keylogger attacks.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "Keyloggers track?",
              choices: ["Keystrokes", "Mouse movements", "Screenshots"],
              answerIndex: 0
            },
            {
              id: "q2",
              text: "Which malware was known for stealing banking credentials using keylogging?",
              choices: ["WannaCry", "Zeus Trojan", "ILOVEYOU"],
              answerIndex: 1
            },
            {
              id: "q3",
              text: "Which of the following helps protect against keyloggers?",
              choices: [
                "Downloading cracked apps",
                "Using 2FA and a password manager",
                "Ignoring antivirus warnings"
              ],
              answerIndex: 1
            },
            {
              id: "q4",
              text: "What is malware?",
              choices: [
                "Software designed to harm or steal information",
                "A type of video player",
                "A legal antivirus tool"
              ],
              answerIndex: 0
            },
            {
              id: "q5",
              text: "Which type of keylogger is a physical device?",
              choices: [
                "Software keylogger",
                "Hardware keylogger",
                "Browser keylogger"
              ],
              answerIndex: 1
            },
            {
              id: "q6",
              text: "Which method is commonly used to spread keyloggers?",
              choices: [
                "Public announcements",
                "Phishing emails and malicious downloads",
                "Automatic OS updates"
              ],
              answerIndex: 1
            },
            {
              id: "q7",
              text: "Which sign may indicate a keylogger infection?",
              choices: [
                "Delayed typing or unusual lag",
                "High GPU performance",
                "Proper firewall configuration"
              ],
              answerIndex: 0
            },
            {
              id: "q8",
              text: "Browser-based keyloggers collect data by:",
              choices: [
                "Recording web form inputs",
                "Scanning hardware ports",
                "Playing ads"
              ],
              answerIndex: 0
            },
            {
              id: "q9",
              text: "Using a password manager helps protect against keyloggers because:",
              choices: [
                "They automatically change your wallpaper",
                "They autofill passwords instead of typing them",
                "They delete keyloggers from your PC"
              ],
              answerIndex: 1
            },
            {
              id: "q10",
              text: "Kernel-level keyloggers are dangerous because:",
              choices: [
                "They only affect web browsers",
                "They run deep inside the operating system and are harder to detect",
                "They slow down your internet speed"
              ],
              answerIndex: 1
            }
          ]
          ,
  },
  {
    id: "8",
    title: "SQL Injection",
    slug: "sql-injection",
    excerpt:
      "Learn how attackers exploit insecure database queries to access or manipulate sensitive data.",
    time: "16 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Is SQL Injection?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            <strong>SQL Injection (SQLi)</strong> is a cyberattack where an attacker inserts malicious SQL commands into an input field.  
            If the application does not properly validate or sanitize user input, the attacker can trick the database into executing unauthorized commands.  
            SQLi is one of the most common — and dangerous — web vulnerabilities.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">How SQL Injection Works</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            SQL injection happens when applications directly insert user input into SQL queries without proper filtering.  
            Attackers modify the input to alter the structure of the query, allowing them to retrieve data, bypass logins, or even delete entire databases.
          </p>
      
          <pre class="bg-neutral-900 text-neutral-300 p-4 rounded-lg mb-6 overflow-x-auto text-sm">
      SELECT * FROM users WHERE username = '' AND password = ''
          </pre>
      
          <p class="text-neutral-300 leading-relaxed mb-6">
            If an attacker enters something like:
            <br/><strong>' OR '1'='1</strong>
            <br/>the query becomes always true — allowing login without a password.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">What Attackers Can Do with SQL Injection</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Access sensitive data (usernames, emails, password hashes)</li>
            <li>Modify or delete database records</li>
            <li>Bypass login authentication</li>
            <li>Execute administrative operations on the database</li>
            <li>Steal credit card or payment information</li>
            <li>Completely take over the application</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: 2012 LinkedIn Breach</h3>
            <p class="text-neutral-300 leading-relaxed">
              Attackers used SQL injection to access a database containing over  
              <strong>165 million hashed passwords</strong> from LinkedIn users.  
              This breach is still referenced today as a major example of SQLi damage.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">Common Causes of SQL Injection</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Directly embedding user input into SQL queries</li>
            <li>Lack of input validation or sanitization</li>
            <li>Improper use of string concatenation in queries</li>
            <li>Outdated or insecure database drivers</li>
            <li>Missing prepared statements</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Prevent SQL Injection</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Use prepared statements / parameterized queries</strong></li>
            <li>Validate and sanitize all user inputs</li>
            <li>Use ORM frameworks to avoid raw SQL where possible</li>
            <li>Avoid string concatenation in queries</li>
            <li>Limit database permissions (least privilege)</li>
            <li>Use web application firewalls (WAF) for additional protection</li>
            <li>Regularly run vulnerability scans and penetration testing</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            SQL Injection remains one of the most dangerous security vulnerabilities.  
            By validating inputs, using parameterized queries, and following secure coding practices, organizations can prevent attackers from manipulating database queries.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "SQL injection happens when?",
              choices: [
                "Query variables aren't sanitized",
                "User enters password",
                "Files are uploaded"
              ],
              answerIndex: 0
            },
            {
              id: "q2",
              text: "Which attack allows bypassing login authentication?",
              choices: ["DDoS", "SQL Injection", "Man-in-the-middle"],
              answerIndex: 1
            },
            {
              id: "q3",
              text: "Which of the following prevents SQL injection?",
              choices: [
                "Using raw string queries",
                "Parameterized queries (prepared statements)",
                "Storing passwords in plain text"
              ],
              answerIndex: 1
            },
            {
              id: "q4",
              text: "SQL Injection lets attackers:",
              choices: [
                "Access or modify database data",
                "Improve website performance",
                "Encrypt all user passwords automatically"
              ],
              answerIndex: 0
            },
            {
              id: "q5",
              text: "Which real incident involved SQL Injection?",
              choices: [
                "WannaCry outbreak",
                "LinkedIn 2012 password leak",
                "Stuxnet worm"
              ],
              answerIndex: 1
            },
            {
              id: "q6",
              text: "A common cause of SQL Injection is:",
              choices: [
                "Directly embedding user input in SQL queries",
                "Using prepared statements",
                "Limiting user permissions"
              ],
              answerIndex: 0
            },
            {
              id: "q7",
              text: "Which input could be used for a SQLi login bypass?",
              choices: [
                "hello123",
                "' OR '1'='1",
                "correct_password"
              ],
              answerIndex: 1
            },
            {
              id: "q8",
              text: "What is the main danger of SQL Injection?",
              choices: [
                "It changes the color of a website",
                "It allows unauthorized access to databases",
                "It slows down the internet"
              ],
              answerIndex: 1
            },
            {
              id: "q9",
              text: "Which security practice helps reduce SQL Injection risk?",
              choices: [
                "Using strong CPU cooling",
                "Avoiding string concatenation in queries",
                "Disabling user accounts"
              ],
              answerIndex: 1
            },
            {
              id: "q10",
              text: "Which tool can help detect SQL Injection vulnerabilities?",
              choices: [
                "Web Application Firewalls (WAF)",
                "Video editing software",
                "Bluetooth pairing tools"
              ],
              answerIndex: 0
            }
          ]
          ,
  },
  {
    id: "9",
    title: "API Security & Token Theft",
    slug: "api-security",
    excerpt:
      "Learn how insecure APIs expose sensitive data, how attackers steal tokens, and how to secure API authentication.",
    time: "19 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">What Are APIs?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            An <strong>API (Application Programming Interface)</strong> allows applications to communicate with each other.  
            APIs power login systems, payments, mobile apps, cloud services, and more.  
            Because they expose functionality directly to the internet, they become a major attack target.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Why API Security Matters</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            APIs often handle sensitive operations such as authentication, financial transactions, and user data access.  
            Weak security controls can allow attackers to manipulate endpoints, steal tokens, bypass authentication, or retrieve confidential information.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Common API Vulnerabilities</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Weak or missing authentication:</strong> APIs that allow requests without verifying the user.</li>
            <li><strong>Exposed API keys or tokens:</strong> Attackers use leaked keys to impersonate users.</li>
            <li><strong>No rate limiting:</strong> Allows brute-force attacks or massive data scraping.</li>
            <li><strong>Improper authorization checks:</strong> Users access data that doesn't belong to them.</li>
            <li><strong>Unvalidated input:</strong> Leads to SQLi, command injection, or logic bypasses.</li>
            <li><strong>Misconfigured CORS:</strong> Allows malicious websites to read API responses.</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: GitHub Token Leak</h3>
            <p class="text-neutral-300 leading-relaxed">
              In multiple incidents, developers accidentally pushed API tokens and secret keys to public GitHub repositories.  
              Attackers scanned these repos, used the tokens to access cloud services, and even spun up expensive compute resources.  
              Some companies faced damages worth <strong>thousands of dollars</strong>.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">What Is Token Theft?</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Token theft occurs when attackers obtain API keys, JWTs (JSON Web Tokens), or session tokens.  
            These tokens act like “digital passwords.”  
            If stolen, an attacker can access the API exactly as if they were the legitimate user.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">How Tokens Are Stolen</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Exposed keys in GitHub repositories</li>
            <li>Weakly protected local storage (e.g., XSS stealing JWTs)</li>
            <li>Phishing attacks targeting developers</li>
            <li>Man-in-the-middle attacks on insecure networks</li>
            <li>Leaked CI/CD pipeline environment variables</li>
            <li>Browser extensions with excessive permissions</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Impact of API Attacks</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            API attacks can compromise entire systems since APIs often connect directly to databases or internal services.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Unauthorized access to user data</li>
            <li>Identity impersonation</li>
            <li>Account takeovers</li>
            <li>Financial fraud</li>
            <li>Massive data scraping</li>
            <li>Service outages or resource abuse</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Secure APIs</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Use strong authentication</strong> (OAuth2, JWT with short expiry)</li>
            <li><strong>Rotate tokens regularly</strong></li>
            <li>Store tokens securely (HTTP-only cookies or secure vaults)</li>
            <li>Enforce <strong>rate limits</strong> to stop brute force attempts</li>
            <li>Validate user permissions for every request (authorization checks)</li>
            <li>Validate all inputs to prevent injection attacks</li>
            <li>Enable HTTPS only (no HTTP)</li>
            <li>Use API gateways and WAFs for additional protection</li>
            <li>Monitor logs and detect suspicious API activity</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            APIs are powerful but highly exposed.  
            Weak authentication, leaked tokens, or missing rate limits can lead to severe data breaches.  
            By enforcing strict token security, proper authentication, and strong validation, organizations can protect APIs from modern attacks.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "APIs become vulnerable when:",
              choices: [
                "Tokens are leaked",
                "Rate limits are missing",
                "Auth is weak",
                "All of the above"
              ],
              answerIndex: 3
            },
            {
              id: "q2",
              text: "What is token theft?",
              choices: [
                "Stealing UI elements",
                "Obtaining API keys or authentication tokens",
                "Removing front-end components"
              ],
              answerIndex: 1
            },
            {
              id: "q3",
              text: "Which practice improves API security?",
              choices: [
                "Storing tokens in localStorage",
                "Hardcoding API keys in your code",
                "Using HTTPS and secure token storage"
              ],
              answerIndex: 2
            },
            {
              id: "q4",
              text: "What does an API key or token function as?",
              choices: [
                "A digital password",
                "A performance booster",
                "A UI styling component"
              ],
              answerIndex: 0
            },
            {
              id: "q5",
              text: "Which attack steals tokens stored in the browser?",
              choices: ["XSS attack", "DDoS attack", "DNS poisoning"],
              answerIndex: 0
            },
            {
              id: "q6",
              text: "What can happen if an API has no rate limiting?",
              choices: [
                "Stronger security",
                "Brute-force or mass scraping attacks",
                "Automatic password resets"
              ],
              answerIndex: 1
            },
            {
              id: "q7",
              text: "Which mistake exposes API keys publicly?",
              choices: [
                "Storing keys in environment variables",
                "Accidentally pushing keys to GitHub",
                "Using a secure vault"
              ],
              answerIndex: 1
            },
            {
              id: "q8",
              text: "Which protocol should APIs use to prevent token interception?",
              choices: ["HTTP", "HTTPS", "FTP"],
              answerIndex: 1
            },
            {
              id: "q9",
              text: "Which measure helps limit damage if a token is stolen?",
              choices: [
                "Never rotating tokens",
                "Using tokens that never expire",
                "Using short-lived tokens and refreshing them securely"
              ],
              answerIndex: 2
            },
            {
              id: "q10",
              text: "What role does an API Gateway play?",
              choices: [
                "It increases internet speed",
                "It filters, validates, and secures API traffic",
                "It updates the UI theme"
              ],
              answerIndex: 1
            }
          ]
          ,
  },
  {
    id: "10",
    title: "Mobile Security Threats",
    slug: "mobile-security-threats",
    excerpt:
      "Mobile devices are powerful but highly targeted. Learn the major risks and how to protect your smartphone.",
    time: "13 mins",
    content: `
          <h2 class="text-2xl font-semibold mb-4">Why Mobile Security Matters</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Mobile phones carry sensitive data — messages, photos, banking apps, authentication codes, and even passwords.  
            Because we keep them with us all the time, they have become one of the most common targets for cyberattacks.  
            A compromised device can expose nearly every part of a user's digital life.
          </p>
      
          <h2 class="text-2xl font-semibold mb-4">Common Mobile Security Risks</h2>
          <p class="text-neutral-300 leading-relaxed mb-6">
            Mobile devices face both software-based and physical threats.  
            Attackers take advantage of unsafe apps, weak security settings, and user behavior.
          </p>
      
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li><strong>Malware infections:</strong> Malicious apps disguised as games, utilities, or updates.</li>
            <li><strong>Phishing attacks:</strong> Fake SMS messages or mobile-friendly phishing pages.</li>
            <li><strong>Spy apps:</strong> Apps that secretly record activity, calls, or messages.</li>
            <li><strong>Public Wi-Fi attacks:</strong> Intercepting traffic on unsecured networks.</li>
            <li><strong>SIM swapping:</strong> Attackers transfer your phone number to a new SIM to steal OTPs.</li>
            <li><strong>Malicious QR codes:</strong> QR codes leading to phishing sites or malware downloads.</li>
            <li><strong>Stolen devices:</strong> Physical theft leading to full data access if the phone is unlocked.</li>
          </ul>
      
          <div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
            <h3 class="text-xl font-semibold mb-3">🔍 Real Example: Pegasus Spyware</h3>
            <p class="text-neutral-300 leading-relaxed">
              Pegasus is a sophisticated spyware that infected phones simply by sending a message — no clicks needed.  
              It could access calls, messages, microphones, cameras, and GPS data.  
              This case showed how dangerous mobile spyware can be when security vulnerabilities are exploited.
            </p>
          </div>
      
          <h2 class="text-2xl font-semibold mb-4">How Mobile Devices Get Compromised</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Downloading apps from untrusted sources</li>
            <li>Granting unnecessary permissions (camera, microphone, location)</li>
            <li>Using weak or reused passwords for apps</li>
            <li>Clicking malicious links in SMS or WhatsApp</li>
            <li>Connecting to unknown Wi-Fi networks</li>
            <li>Using outdated operating systems or apps</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">How to Protect Your Mobile Device</h2>
          <ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
            <li>Install apps only from official stores (Play Store / App Store)</li>
            <li>Use strong screen locks (PIN, fingerprint, or Face ID)</li>
            <li>Regularly update the OS and apps</li>
            <li>Review permissions and remove risky apps</li>
            <li>Avoid public Wi-Fi or use a VPN</li>
            <li>Enable “Find My Device” for remote lock/wipe</li>
            <li>Do not root or jailbreak your phone</li>
            <li>Enable two-factor authentication (2FA) for important apps</li>
          </ul>
      
          <h2 class="text-2xl font-semibold mb-4">Summary</h2>
          <p class="text-neutral-300 leading-relaxed">
            Mobile devices are highly vulnerable because they store personal, financial, and authentication data.  
            By avoiding risky apps, using strong security settings, and staying aware of common mobile-based attacks, users can keep their phones safe from modern threats.
          </p>
        `,
        questions: [
            {
              id: "q1",
              text: "Which threat affects mobile the most?",
              choices: ["Malware", "Phishing", "Spy apps", "All of the above"],
              answerIndex: 3
            },
            {
              id: "q2",
              text: "What is SIM swapping?",
              choices: [
                "Changing your phone’s wallpaper",
                "Moving your phone number to a new SIM to steal OTPs",
                "Installing a new SIM for better network"
              ],
              answerIndex: 1
            },
            {
              id: "q3",
              text: "Which practice improves mobile security?",
              choices: [
                "Downloading APKs from random websites",
                "Using strong lock screens and updating apps",
                "Granting all permissions to apps"
              ],
              answerIndex: 1
            },
            {
              id: "q4",
              text: "Which of the following is a common mobile threat?",
              choices: ["Malicious QR codes", "Rainy weather", "Low brightness mode"],
              answerIndex: 0
            },
            {
              id: "q5",
              text: "Pegasus spyware was dangerous because:",
              choices: [
                "It required users to click links",
                "It infected devices without any interaction",
                "It only worked on old phones"
              ],
              answerIndex: 1
            },
            {
              id: "q6",
              text: "Which activity increases the risk of malware on mobile phones?",
              choices: [
                "Installing apps from official stores",
                "Using cracked or pirated apps",
                "Updating your device regularly"
              ],
              answerIndex: 1
            },
            {
              id: "q7",
              text: "Which network is unsafe for sensitive activities?",
              choices: ["Your home Wi-Fi", "University Wi-Fi", "Public open Wi-Fi"],
              answerIndex: 2
            },
            {
              id: "q8",
              text: "What does enabling 'Find My Device' allow you to do?",
              choices: [
                "Boost network speed",
                "Remotely lock or wipe your phone if stolen",
                "Read others' messages"
              ],
              answerIndex: 1
            },
            {
              id: "q9",
              text: "Granting unnecessary app permissions can lead to:",
              choices: [
                "Better performance",
                "Apps accessing more data than needed",
                "Reduced battery usage"
              ],
              answerIndex: 1
            },
            {
              id: "q10",
              text: "Which measure helps protect your device from phishing links in SMS?",
              choices: [
                "Clicking every link to check",
                "Ignoring suspicious messages and verifying with official sources",
                "Turning off the internet permanently"
              ],
              answerIndex: 1
            }
          ]
          ,
  },
];

// Optional user dummy scores
export const scores = [
  { lessonSlug: "intro-to-data-breaches", score: 4, total: 5 },
  { lessonSlug: "phishing-attacks", score: 3, total: 5 },
];
