const terms = document.querySelector("#terms");
const policy = document.querySelector("#policy");

const handleClick = (e) => {
    const $modal_title = document.querySelector("#legal-info-label");
    const $modal_body = document.querySelector("#legal-body");

    if(e.target.id === "policy") {
        $modal_title.textContent = "Privacy Policy";
        $modal_body.innerHTML = `
        <div class="my-2">
            Effective September 01, 2022
        </div>
        <br />
        <div>
            1. Privacy Policy
            This Privacy Policy applies to the sites, apps, events, and other services provided by
            Topo. For simplicity, we will refer to them as “Service” in the Privacy Policy. Some 
            services may have their own privacy policy. If a particular service has its own 
            privacy policy, then the policy of the service will govern, not this Privacy Policy.
            <br />
        </div>
        <div class="my-2">
            2. Information We Collect
            To provide adequate service from our platform we must collect information about 
            you, such as basic profile data and personal preferences. We also collect 
            information about your use of our Service, such as browsing logs, and information 
            from third parties platforms, such as social media. 
            Information You Provide To Topomatch
            When you use our Service, you provide us the following information:
            <ul class="list my-3">
                <li>
                    1. When you create an account, at a minimum, you provide us with your phone 
                    number and email address, as well as some basic information necessary for 
                    the operation of the Service, such as your gender and date of birth.
                </li>
                <li>
                    2. When you complete your profile, you can provide us with additional 
                    information about yourself, your interests and more, as well as photos and 
                    videos. To add certain content, such as images or videos, you can give us 
                    access to your camera or photo album.
                </li>
                <li>
                    3. When you subscribe to paid services or make a purchases directly on our site 
                    (and not through platforms such as iOS or Android), you provide us or the 
                    payment processor with information such as your debit or credit card number
                    and other financial information.                
                </li>
                <li>
                    4. When you participate in focus groups, surveys, or market research, you share
                    with us your opinion about our products and services, answers to our 
                    questions and feedback.
                </li>
                <li>
                    5. When you participate in our promotions, events, or contests, we collect 
                    information that you provide when you register or log in.                   
                </li>
                <li>
                    6. When you contact our support team, we collect information that you provide 
                    to us during the call.
                </li>
                <li>
                    7. If you provide Topo with information about other people, we process that 
                    information on your behalf to fulfill your request. Of course, we also process 
                    your chats with other users and the content you posts in the Service.
                </li>
            </ul>
        </div>
        <div class="my-2">
            Information We Receive From Other Sources
        </div>
        <div class="my-2">
            In addition to the information you provided to us directly, we also receive 
            information indirectly, such as:
        </div>
        <ul class="list my-3">
            <li>
                1. Users may provide information about you when using our Service, such as 
                when communicating with you or filing a complaint against you.
            </li>
            <li>
                2. The social media account you choose to share with Topo through your social 
                media account to login or upload Content to our Service.  
            </li>
            <li>
                3. We may receive information about you from our partners or affiliates. Where 
                permitted by law, we may also receive information from third parties. 
            </li>
            <li>
                4. When you use our Service, we collect technical information about which 
                features you used, how you used them, and which devices you used to 
                access our services. Included below:
                <ul class="list my-2">
                    <li>
                        a. Data is recorded about your use of our Service: how it was utilized (date 
                        and time you logged in, features you use, activities, information shown to 
                        you, addresses of pages you came from, advertisements clicked) and how 
                        you communicate with other users.
                    </li>
                    <li>
                        b. Device Information to access our Service, including hardware and 
                        software information such as IP address, device ID and type, application 
                        settings and characteristics, application crashes, advertising identifiers, 
                        identifiers associated with cookies or other technologies that can uniquely 
                        identify a device or browser.
                    </li>
                    <li>
                        c. Consent you provide may determine your exact location (latitude and 
                        longitude). Location data collection may occur in the background even 
                        when you are not using the Service. If you do not give us permission to 
                        collect information about your exact location, we will not collect this 
                        information. 
                    </li>
                </ul>
            </li>
        </ul>
        <div class="my-1">
            3. Cookies and Other Similar Data Collection Technologies
        </div>
        <div class=my-1>
            We utilize cookies and similar technologies (e.g., web beacons, pixels) to recognize 
            you and your devices. 
        </div>
        <div class="my-1">
            4. How Information is Utilized
        </div>
        <div class="my-1">
            Your information is to improve our services. In addition, we use your information for 
            security purposes and to serve ads that may be of interest to you. In the following, 
            we will detail the reasons why we use your information, as well as provide 
            examples.
        </div>
        <ul class="list my-3">
            <li>
                1. To manage your account and provide our Service
                <ul class="list my-2">
                    <li>
                        a. Create and manage your account
                    </li>
                    <li>
                        b. Provide customer support and respond to your inquiries
                    </li>
                    <li>
                        c. Conduct your transactions
                    </li>
                    <li>
                        d. Provide customer support
                    </li>
                </ul>
            </li>
            <li>
                2. To display your profile to other users
            </li>
            <li>
                3. To provide you with new Topo services      
                <ul class="list my-2">
                    <li>
                        a. Register and display your profile in new Topo features and apps
                    </li>
                    <li>
                        b. Administer your account in these new features and applications
                    </li>
                </ul>        
            </li>
            <li>
                4. To manage advertising and marketing campaigns
                <ul class="list my-2">
                    <li>
                        a. Organize sweepstakes and contests, provide discounts or other offers
                    </li>
                    <li>
                        b. Run and measure the effectiveness of advertising campaigns on the 
                        Service, as well as Topo’s marketing campaigns on third-party services
                    </li>
                    <li>
                        c. To inform our users about products or services that might interested in.
                    </li>
                </ul>            
            </li>
            <li>
                5. To improve our services and develop new features
                <ul class="list my-2">
                    <li>
                        a. Manage focus groups, market research, and surveys
                    </li>
                    <li>
                        b. Study interaction with the help desk to improve the quality of support
                    </li>
                    <li>
                        c. Analyze user behavior in the Service to improve them (for example, we 
                            may change the design or completely redesign a feature depending on 
                            user actions)
                    </li>
                    <li>
                        d. Develop new features and services 
                    </li>
                </ul>         
            </li>
            <li>
                6. To prevent, detect, and combat fraud and other illegal or unauthorized 
                activities
                <ul class="list my-2">
                    <li>
                        a. Detect or respond to current or suspected violations of our Terms of Use 
                        through complaints investigation and user communications
                    </li>
                    <li>
                        b. Learn more and develop measures to counter violations of our Terms of 
                        Use
                    </li>
                    <li>
                        c. Store data related to violations of our Terms of Use to prevent recurrence
                    </li>
                    <li>
                        d. Comply with or enforce our rights, such as our Terms of Service
                    </li>
                    <li>
                        e. Report the results to users who have filed complaints
                    </li>
                </ul>      
            </li>
            <li>        
                7. To ensure legal compliance
                <ul class="list my-2">
                    <li>
                        a. Comply with legal or regulation requirements
                    </li>
                    <li>
                        b. Facilitate law enforcement investigations
                    </li>
                </ul>      
            </li>
        </ul>
        <div class="my-2">
            For information on how we process personal information through user profiling and 
            automated decision making, please see our FAQ section.                   
        </div>
        <div class="my-2">
            In order to process your information as described in this Privacy Policy, we rely on 
            the following legal bases:                   
        </div>
        <ul class="list my-3">
            <li>
                1. Service Provider: We process your information to fulfill the terms our 
                Agreement. As you use Service, we use your information to maintain your 
                account and display your profile to other users.
            </li>
            <li>
                2. Service Improvement: We process your information to continually improve 
                our products, make suggestions, advertise our services, and process 
                information to ensure your safety, exercise our rights when necessary, and 
                assist government regulations. 
            </li>
            <li>
                3. Compliance with Applicable Laws and Regulations: We process your 
                information to comply with local laws and regulations. We also store data 
                about user consent and their decisions to opt out of any features or data 
                processing.
            </li>
            <li>
                4. Consent: If you choose to provide us with information by uploading Content, 
                you consented to the processing of such information in accordance with this 
                Privacy Policy. We may from time to time ask you for your consent to collect 
                specific information, such as your exact location. In some cases, you may be 
                able to withdraw your consent by changing your settings or deleting your 
                content. In any case, you can always withdraw your consent by contacting us 
                through the information provided to you.
            </li>
        </ul>
        <div class="my-2">
            5. How Information Is Shared
        </div>

        <ul class="list my-3">
            <li>
                1. Our goal in Topomatch is interconnection of our Users. The exchange of 
                information takes place with other users. We also share some user 
                information with service providers and partners who assist us in operating the
                Service.
                <ul class="list my-2">
                    <li>
                        a. Providing information to other users: You share information with other 
                        users when you voluntarily disclose information on the Service (including 
                        a public profile). Use caution when providing such information.
                    </li>
                    <li>
                        b. If someone files a complaint against you, we may inform that person 
                        about the action taken in response to their complaint.
                    </li>
                </ul>
            </li>
            <li>
                2. Sharing information with our service providers and partners. We use third 
                party services to support our operations and improve our services. These 
                third parties help us with a variety of tasks, including data hosting, 
                maintenance, analytics, customer service, marketing, advertising, payment 
                processing, and security operations. We may also provide information to 
                partners who distribute and help us advertise our Service. We conduct 
                rigorous due diligence before engaging a service provider or working with a 
                partner. All our service providers and partners must agree to strict 
                confidentiality obligations.
            </li>
            <li>
                3. Providing information to affiliates.
                <ul class="list my-2>
                    <li>
                        a. For certain lawful purposes, we share your information with affiliates in 
                        order to:
                        <ul class="list my-2>
                            <li>
                                I. Ensure the security of the Service and block unscrupulous users; 
                                receive assistance in the processing of data as service providers on 
                                our behalf or on our behalf. This assistance may include technical 
                                data processing operations such as data hosting and maintenance, 
                                customer service, marketing, and targeted advertising, financial 
                                and accounting support, improving our service, ensuring the 
                                security of our data and systems, combating spam, abuse, fraud, 
                                and other offences.
                            </li>
                            <li>
                                II. We may also share information with other affiliates for other 
                                legitimate business purposes such as corporate auditing, analytics, 
                                and aggregate reporting, and to comply with applicable law.
                            </li>
                            <li>
                                III. Ability to grant access
                            </li>
                        </ul> 
                    </li>
                    <li>
                        b. Corporate Operations. We may share your information if we are involved, 
                        in whole or in part, in a merger, sale, acquisition, spin-off, restructuring, 
                        reorganization, dissolution, bankruptcy or other change of ownership or 
                        control.
                    </li>
                    <li>
                        c. Law enforcement / Court Subpoena: We may disclose your information as 
                        necessary to: (a) comply with court orders, such as a court order, 
                        subpoena or search warrant, government/law enforcement investigation, 
                        or other legal requirement; b) assist in the prevention or detection of 
                        crime (in each case, in accordance with applicable law); or c) to protect 
                        the safety of the user.
                    </li>
                    <li>
                        d. Enforcement of Legal Rights. We may share information: a) if disclosure 
                        would reduce our liability in an actual or alleged claim; b) protect our legal
                        rights and the legal rights of our users, business partners or other 
                        interested parties as necessary; c) to enforce our agreements with you; 
                        and d) to investigate, prevent or take other action regarding illegal 
                        activities, suspected fraud or other violations.
                    </li>
                    <li>
                        e. With Consent. We may ask for your consent to share your information with
                        third parties. We may use and share non-personal information, as well as 
                        personal information. We may also share it with other companies and 
                        third parties (such as advertisers) in order to develop and deliver targeted
                        advertising on our Service, third party websites or applications, and to 
                        analyze and report on the ads you see. We may combine this information 
                        with additional non-personal information or personal information. 
                    </li>
                </ul> 
            </li>
        </ul>
        <div class="my-2">
            6. Cross-Border Data Transfer
        </div>                     
        <div class="my-2">
            The disclosures set out in Section 6 involves cross-border transfers to the United 
            States of America and other jurisdictions that may have different data processing 
            laws. When transferring personal information outside the EEA, United Kingdom, 
            Switzerland, or other countries whose data protection laws are recognized by the 
            European Commission or other competent authority, we use standard contract 
            clauses (standard contract clauses are obligations of companies when transferring 
            personal information in the field of privacy protection and data security) or other 
            appropriate data transmission mechanism. We are currently reviewing how we 
            share data with our suppliers and the related legal framework in line with the 
            European Union's recent decision on the transfer of personal data to the United 
            States.
        </div>
        <div class="my-2">
            7. Your Rights
        </div>
        <div class="my-2">
            As a Topo user, you have the following tools:
        </div>
        
        <ul class="list my-3">
            <li>
                1. Access/update tools in the service. Tools and account settings through which 
                you can access, correct, or delete the information provided to us in 
                association with your account. If you have any questions regarding these 
                tools and settings, please contact our Customer Support Center here.
            </li>
            <li>
                2. Permissions for devices. Mobile platforms have permission systems for 
                certain types of data and notifications, such as contacts, photos, location 
                services, push notifications, and advertising identifiers. You can change the 
                settings on your device to enable or disable the collection or processing of 
                relevant information or the display of relevant notifications.
            </li>
            <li>
                3. Removal. You can stop the collection of all information by the application by 
                uninstalling it using the standard process on your device. Remember that 
                deleting the app does NOT delete your account. To remove it, use the 
                appropriate function of the service.
            </li>
            <li>
                4. Account Termination. You can delete your account using the corresponding 
                function of the service.
            </li>
        </ul>
        <div class="my-2">
            Please be aware of your privacy rights. Here are guidelines:
        </div>
        <ul class="list my-3">
            <li>
                1. Verification of information. The laws governing the processing of personal 
                data may give you the right to request the information we hold about you 
                (depending on the jurisdiction, this may be referred to as the right of access, 
                the right to data portability and the right to know). You can exercise your 
                right to submit a request here.
            </li>
            <li>
                2. Information update. If you believe that the information we hold is inaccurate 
                or that we no longer have the right to use it, and if you would like to request 
                its rectification, deletion, objection or restriction of processing, please contact
                us here.
            </li>
            <li>
                3. For your protection and the safety of all our users, we may ask you to verify 
                your identity before we can respond to the above requests.
            </li>
        </ul>
        <div class="my-2">
            Please note that we may refuse requests, including if we cannot verify your identity,
            if the request is illegal, or may violate the trade secrets, intellectual property, or 
            privacy of other users. If you wish to receive information about another user, such 
            as copies of communications received from him or through our service, the other 
            user must contact our Privacy Officer to provide their written consent before the 
            information is shared. We may also ask the user to verify their identity to complete 
            the request.
        </div>
        <div class="my-2">
            In addition, we may not be able to comply with certain requests to object to the 
            processing of personal information, especially in cases where such requests would 
            prevent us from providing our Service to you. For example, you will not be able to 
            use the Service if we do not have your date of birth and cannot verify that you are 
            over 18 years of age.
        </div>
        <div class="my-2">
            In some countries, including the European Economic Area and the United Kingdom, 
            you have the right to complain to the appropriate data protection authority if you 
            have concerns about how we process your personal information. You can find 
            information about the data protection authority in the EEA here and in the UK here. 
            You can file a complaint with the data protection authority where you live, work or 
            where the alleged infringement occurs.
        </div>
        <div class="my-2">
            8. Length of Data Storage
        </div>
        <div class="my-2">
            We retain your personal information only for as long as we need it for legitimate 
            business purposes (as set out in Section 5) and as required by applicable law. If you 
            decide to stop using the Service, you can delete your account and your profile will 
            no longer be visible to other users. Please note that we will automatically terminate 
            your account if it is inactive for two years. After closing your account, we will delete 
            your personal information as follows:
        </div>
        <ul class="list my-3">
            <li>
                1. To ensure the safety and security of our users, we retain data for three 
                months after an account is terminated or for one year after an account is 
                disabled. During this period, we retain your information in case we need to 
                investigate illegal or malicious activities. The retention of information during 
                this period is based on our legitimate interests, as well as the interests of 
                possible third-party victims.
            </li>
            <li>
                2. After the retention period has expired, for security purposes, we will delete 
                your data and retain only limited information for the specific purposes listed 
                below:
            </li>
            <li>
                3. We keep some data in accordance with legal data retention obligations: for 
                example, we keep transaction data for 10 years in accordance with tax and 
                accounting requirements, bank card information during the entire period 
                during which the user can dispute the transaction, and "traffic data"/visit logs
                for one year to comply with legal data retention obligations. We also keep 
                records of the consents that users provide for 5 years to confirm our 
                compliance with applicable laws.
            </li>
            <li>
                4. We retain limited information based on our legitimate interests: customer 
                service records and ancillary data, and inaccurate download/purchase 
                location for five years to help make customer service decisions, enforce our 
                rights and defend against claims; information about the existence of past 
                accounts and subscriptions, which we delete three years after the 
                termination of your last account, in order to ensure proper and accurate 
                financial planning and reporting; One year of profiling data for possible 
                litigation for filing, executing and defending legal claims; data necessary to 
                prevent access by users who have been prevented from registering a new 
                account - for the period required to ensure the safety and well-being of our 
                users.
            </li>
            <li>
                5. Finally, we retain information based on our legitimate interests when there is 
                an unresolved or potential issue, claim or dispute requiring us to retain the 
                information (in particular if we receive a valid subpoena or request to retain 
                the data (in which case we need to retain the data to comply with our legal 
                obligations), or if the data is required as part of legal proceedings).
            </li>
        </ul>
        <div class="my-2">
            9. Protect Children's Privacy
        </div>
        <div class="my-2">
            The Service is only available for users aged 18 years of age or older. We do not 
            allow persons under the age of 18 to use our Service. If you suspect that a user is 
            under the age of 18, please use the available reporting feature.
        </div>
        <div class="my-2">
            10. Applicants, Affiliates, Agents, and Representatives
        </div>
        <div class="my-2">
            We process the personal information of applicants, affiliates, agents, and 
            representatives as part of our recruitment and personnel management operations, 
            as well as in the management of the Service provided by our contractors and 
            suppliers. If you are a job seeker, contractor, or representative of a Topomatch 
            supplier, certain terms of this Privacy Policy apply to our processing of your 
            personal information, including the sections dealing with the entity responsible for 
            processing your personal information, the transfer of personal information, your 
            rights under applicable law, our contact details for communication and information 
            for residents of the State of California.
        </div>
        <div class="my-2">
            If you are a job seeker, the personal information we process about you may vary 
            depending on the position you seek, but typically includes what you provide to us in
            your job application, as well as professional qualifications, curriculum vitae, and 
            background information provided to us by recruiters or others. We use this 
            information to organize the recruitment process, which may lead to an employment 
            contract. We may process the identification data of contractors and supplier 
            representatives, as well as information related to their work, if it is necessary to 
            manage our relationship with you and your employer. We require such information 
            in order to perform the service agreement and to establish, exercise or defend 
            against possible legal claims. We may share personal information with service 
            providers who help us recruit and process technical data, and with Match Group 
            companies (for example, if you have a business relationship with an affiliate's 
            employees). Personal information is stored only as long as it is necessary to fulfill 
            the specified purposes.
        </div>
        <div class="my-2">
            11. Changes to the Privacy Policy
        </div>
        <div class="my-2">
            We are always looking for new and innovative ways to help you learn about and 
            provide up-to-date information about our approach to data processing, this policy 
            may change over time. We will alert you any major changes that go into effect for 
            your review. 
        </div>
   `;
    } else {
        $modal_title.textContent = "Terms of Service";
        $modal_body.innerHTML = `
        <div class="my-2">
            Effective September 01, 2022
        </div>
        <div class="my-2">
            Topomatch LLC (“Topomatch” or “Topo”) principal place of business is located in 
            Temple City, California. The Terms (“Us”, “We”, the “Company”, or “Topo”) refers to
            Topomatch LLC. 
        </div>
        <div class="my-2">
            1. Acceptance of the Terms of Use.
        </div>
            By creating a Topomatch account using a mobile device, mobile app, or computer 
            (the "Service"), you agree to be bound by: (i) these Terms of Use; (ii) our Privacy 
            Policy, Cookie Policy, Arbitration Procedures (if applicable to you), Security 
            Guidelines and Community Guidelines, which are incorporated by reference into this
            Agreement; (iii) all terms and conditions posted and accepted by you if you 
            purchased additional features, products or services that we offer as part of the 
            Service (the “Agreement”). If you do not accept all the terms of this Agreement, do 
            not use the Service.
        <div class="my-2">
            We reserve the right to make changes to this Agreement and the Service. Such 
            changes may be due many reasons: changes in legislation or regulations; the 
            introduction of new features; and changes in business practices. The latest version 
            of this Agreement is published on the Service in the "Settings" section, as well as on
            the topomatch.com website. We recommend that you regularly check the 
            Agreement for updates, since it is the latest version of the Agreement. If we make 
            material changes that relate to the rights or obligations of the user, we will notify 
            you of these changes no later than 30 days in advance (unless we are unable to do 
            so in accordance with applicable law), such notices will be given through the Service
            or email. By continuing to use the Service after the changes take effect, you agree 
            to the latest version of the Agreement.
        </div>
        <div class="my-2">
            2. Legality
        </div>
        <div class="my-2">
            You may not create an account, access, or use the Service, unless all the following 
            conditions are met:
        </div>
        <ul class="list my-3">
            <li>
                1. You are at least 18 years old;
            </li>
            <li>
                2. You have the capacity to enter into a legally binding contract with Topo;
            </li>
            <li>
                3. You are not prohibited from using the Service under the laws of the United 
                States or any other jurisdictions, domestically or internationally;
            </li>
            <li>
                4. You agree to comply with this Agreement and all applicable local, state, 
                national and international laws and regulations;
            </li>
            <li>
                5. You have not been convicted of a felony or punishable offense; a sexual 
                offense or any crime of violence; are not required to register on any federal 
                or state sex offender registry.
            </li>
        </ul>

        <div class="my-2">
            3. Your Account
        </div>
        <div class="my-2">
            You may sign-in to Topo in a variety of ways, including signing in with your 
            Facebook account. By logging in with your Facebook account, you grant us access 
            to and permission to use certain information from your Facebook account, including 
            but not limited to information from your public Facebook profile. For more 
            information about the content we collect from you and how we use it, please see 
            our Privacy Policy.
        </div>
        <div class="my-2">
            You are responsible for maintaining the confidentiality of your credentials used to 
            log into Topo. You are also solely responsible for all activities that occur using these 
            credentials. If you suspect that someone has gained access to your account, please 
            contact us immediately.
        </div>
        <div class="my-2">
            4. Modification and Termination of the Service
        </div>
        <div class="my-2">
            Topo strives to improve the Service and bringing you new and useful features. This 
            means that we have the right to add new features, make improvements, and 
            remove some features. We have the right not to notify you of such actions if they do
            not materially affect your rights or obligations. We also have the right to completely
            suspend the provision of the Service, of which we will notify you in advance, except 
            in cases of extenuating circumstances, for example, for security reasons.
        </div>
        <div class="my-2">
            You can delete your account at any time by following the instructions in the 
            "Settings" section within the Service. However, if you use a third-party billing 
            account for in-app purchases, such as Apple's App Store or iTunes Store ("App 
            Store") or Google Play Store, you must also cancel your subscription from that 
            account to avoid further charges. Topo has the right to terminate your account at 
            any time without notice if it believes that you have violated this Agreement. Upon 
            such termination, you will no longer be entitled to a refund of purchases.
        </div>
        <div class="my-2">
            For residents of the Republic of Korea: unless we reasonably believe that (i) the 
            notification is prohibited by law (for example, if the notification would violate 
            applicable laws, regulations, or regulatory orders, or would jeopardize a regulatory 
            investigation), or (ii) where a notice could harm you, third parties, Topo and/or our 
            affiliates (for example, when the notice threatens the security of the Service), we 
            will promptly notify you of the reason for taking the appropriate action.
        </div>
        <div class="my-2">
            Upon termination of your account, this Agreement shall be deemed terminated, 
            however the following sections shall remain in full force and effect with respect to 
            you and Topo: Section 4, Section 5 and Sections 12-19.
        </div>
        <div class="my-2">
            5. Safety: Your interactions with Other Users.
        </div>
        <div class="my-2">
            While Topo promotes respectful relationships between Users through features such 
            as the double opt-in, which allows subscribers to communicate only after they both 
            show interest in each other, Topo is not responsible for users' actions on or off the 
            Service. You agree to use caution when interacting with other users, especially if 
            you choose to meet in person. You agree not to provide your financial information 
            (such as your credit card or bank account information) or transfer or otherwise send
            funds to other users.
        </div>
        <div class="my-2">
            YOU ARE SOLELY RESPONSIBLE FOR INTERACTIONS WITH OTHER USERS. YOU 
            UNDERSTAND THAT TOPOMATCH DOES NOT VERIFY USERS' CRIMINAL RECORDS OR
            REQUEST USERS' OTHER PERSONAL INFORMATION. TOPOMATCH MAKES NO 
            WARRANTIES REGARDING THE BEHAVIOR OR COMPATIBILITY OF USERS. 
        </div>
        <div class="my-2">
            6. Rights That Topomatch Grants You
        </div>
        <div class="my-2">
            Topo grants you a personal, worldwide, royalty-free, non-transferable, non-
            exclusive, revocable, non-sublicensable license to access and use the Service. This 
            license is for the sole purpose of enabling you to enjoy the benefits of the Service 
            provided by Topo under this Agreement. This license will automatically terminate 
            and access to the Service will be terminated if you do any of the following:
        </div>
        <ul class="list my-3">
            <li>
                1. Use the Service or any content in the Service for commercial purposes 
                without our written consent;
            </li>
            <li>
                2. Copy, modify, transmit, create any derivative works of, use or in any way 
                reproduce any copyrighted materials, images, trademarks, trade names, 
                proprietary information, service marks and other intellectual property 
                available through the Service, without the prior written consent of Topo; 
                attempt to pass off any of your statements as statements approved by Topo;
            </li>
            <li>
                3. Use robots, bots, spiders, crawlers, scrapers, site crawling applications, proxy
                servers, or other manual or automatic devices, methods or processes to 
                access the Service, extract or index its content, to recreate the Service, its 
                appearance or its content, as well as to bypass its navigational structure;
            </li>
            <li>
                4. Use the Service in any way that would interfere with, disrupt, or adversely 
                affect the Service, servers or networks connected to the Service;
            </li>
            <li>
                5. Upload viruses, malicious code, or compromise the security of the Service;
            </li>
            <li>
                6. Forge headers or otherwise manipulate identifiers in order to disguise the 
                origin of any information transmitted through the Service;
            </li>
            <li>
                7. Create a "frame" or "mirror" any part of the Service without the prior written 
                permission of Topo; 
            </li>
            <li>
                8. Use meta tags, code or other devices containing any links to Topo or the 
                Service (or any trademarks, trademarks, service marks, logos or slogans of 
                Topo) to direct any person to any other website for any purpose;
            </li>
            <li>
                9. Modify, adapt, sublicense, translate, sell, reverse engineer, decipher, 
                decompile or otherwise disassemble any part of the Service or cause others 
                to do so;
            </li>
            <li>
                10.Use or develop any third party applications that interact with the Service or 
                other users' Content without Topo’s written consent;
            </li>
            <li>
                11.Use, access, or publish the Topo API without our written consent;
            </li>
            <li>
                12.Investigate, scan, or test the vulnerability of our Service, any system or 
                network;
            </li>
            <li>
                13.Encourage any activity that violates this Agreement;
            </li>
            <li>
                14.Topo may investigate illegal and/or unauthorized use of the Service and seek 
                any legal remedy, including terminating your account;
            </li>
        </ul>
        <div class="my-2">
            Any software we make available to you may automatically download and install 
            updates or other new features. Controls for automatic downloads may be available 
            in your device's settings menu.
        </div>
        <div class="my-2">
            7. Rights that You Grant to Topomatch
        </div>
        <div class="my-2">
            By creating an account, you grant Topo a worldwide, assignable, royalty-free, sub-
            licensable right and a license to host, store, use, copy, display, reproduce, adapt, 
            edit, publish, modify, and distribute information that you make available through 
            third party sites, such as Facebook, and any information (collectively, "Content") 
            that you post, upload, display, or make available to other users in any other way 
            (collectively, "post"). Topo's license to use your Content is non-exclusive, except for 
            Topo's license to derivative works created using the Service. For example, Topo has 
            an exclusive license to use screenshots of the Service where your Content appears. 
            Additionally, to prevent your Content from being used outside of the Service, you 
            grant Topo the right to act on your behalf in relation to violations related to the use 
            of your Content retrieved from the Service by other subscribers or third parties. It is 
            express permission, but not an obligation, to send notices under 17 U.S.C. § 512(c)
            (3) (i.e., Digital Millennium Copyright Act infringement notices) on your behalf if 
            your Content is extracted and used by unauthorized parties outside of the Service. 
            Our permission to use your Content is subject to applicable laws (for example, 
            privacy laws to the extent that any Content is treated as containing personal data 
            under those laws) and is used solely for the purpose of operating, developing, 
            improving the Service and provision of related services, as well as research and 
            development of new services. You agree that any Content that you post on the 
            Service may be viewed by other users and by anyone visiting the Service site or 
            participating in the Service (including individuals who receive forwarded Content 
            from other Topo users).
        </div>
        <div class="my-2">
            You acknowledge that all information you provided when you create your account, 
            including information provided in your Facebook account, is accurate and true and 
            that you have the right to post Content on the Service and grant the above license 
            to Topo. 
        </div>
        <div class="my-2">
            You understand and agree that we have the right to monitor and review any 
            Content that you post on the Service. We have the right to remove, in whole or in 
            part, any Content that, in our opinion, violates this Agreement or may damage the 
            reputation of the Service.
        </div>
        <div class="my-2">
            When communicating with our customer service representatives, you agree to 
            behave with respect and courtesy. If we believe that your behavior towards a 
            member of our customer service or other employees is threatening, aggressive, or 
            abusive, we reserve the right to terminate your account immediately.
        </div>
        <div class="my-2">
            In connection with Topo allowing you to use the Service, you agree that we, our 
            affiliates and independent partners may advertise on the Service. By submitting 
            suggestions or feedback regarding to the Service of Topo, you agree to Topo's right 
            to use and share that feedback for any purpose without compensating you.
        </div>
        <div class="my-2">
            Topo may receive, store, and disclose information about your account and Content 
            as required by law or to perform this Agreement with you, if Topo believes in good 
            faith that such access, storage, or disclosure is lawful for the purposes of: (i ) 
            execution of a court order; (ii) enforcement of the Agreement; (iii) satisfy any 
            claim(s) that any Content(s) infringes the rights of third parties; (iv) respond to your
            contact with customer support; (v) protect the rights, property, or personal safety of
            the Company or any other person.
        </div>
        <div class="my-2">
            8. Community Rules
        </div>
        <div class="my-2">
            By using the Service, you agree that you are prohibited from:
        </div>
        <ul class="list my-2">
            <li>
                1. Use the Service for any purposes prohibited by this Agreement;
            </li>
            <li>
                2. Use the Service for the purpose of causing harm or with malicious intent;
            </li>
            <li>
                3. Use the Service to harm Topomatch;
            </li>
            <li>
                4. Violate our Community Rules as updated from time to time;
            </li>
            <li>
                5. Send, spam, ask for money from users or deceive them;
            </li>
            <li>
                6. Impersonate any person or entity or post any image of another person 
                without his or her permission;
            </li>
            <li>
                7. Harass, threaten, insult or humiliate anyone, as well as disseminate 
                defamatory information;
            </li>
            <li>
                8. Post Content that violates anyone's rights, including rights of publicity, 
                privacy, copyright, trademarks, or other intellectual property rights or rights 
                arising from a contract;
            </li>
            <li>
                9. Post any Content that incites hatred or contains threats, as well as materials 
                of a sexual or pornographic nature;
            </li>
            <li>
                10.Post any Content that incites violence; contains images of a naked body, 
                scenes of graphic or gratuitous violence;
            </li>
            <li>
                11.Post any Content that promotes racism, intolerance, hatred of any person or 
                group of persons, or contains physical threats;
            </li>
            <li>
                12.Attempt to obtain other users' passwords or personal information for any 
                purpose for commercial or unlawful purposes, or distribute personal 
                information of others without his or her permission;
            </li>
            <li>
                13.Use other users’ accounts, transfer your account to another person, or create 
                more than one account;
            </li>
            <li>
                14.Create other accounts after termination unless you have permission to do so.
            </li>
            <li>
                15.Topo reserves the right to review and/or ban your account without refunding 
                any purchases if you have violated this Agreement, misused the Service, or 
                Topo has deemed your conduct to be inappropriate or illegal, including 
                actions or communications within or outside of the Service. If you violate this 
                Agreement or our Community Rules, you will automatically be denied access 
                to the Service.
            </li>
        </ul>
        <div class="my-2">
            9. Content of Other Users
        </div>
        <div class="my-2">
            Although Topo reserves the right to review and remove Content that violates this 
            Agreement, such Content is the sole responsibility of the Users who posted it. Topo 
            cannot guarantee that all Content complies with this Agreement. If you encounter 
            Content posted within the Service that violates this Agreement, please report it 
            using the Settings function within the Service.
        </div>
        <div class="my-2">
            10. Shopping
        </div>
        <div class="my-2">
            General provisions. Topo may, from time to time, offer paid products and services 
            (“In-App Purchases”) available for purchase through the App Store, Google Play 
            Store, mobile carrier, Topo payment services, or other payment platforms permitted
            by Topo. To make an in-app purchase, you will need to confirm payment with the 
            applicable payment provider and the payment method you have chosen (bank card 
            or third-party payment service such as the Google Play Store or App Store) 
            (hereinafter referred to as "payment method"); this payment method will be used to
            charge the cost of the service selected in the application, including all necessary 
            commissions and taxes. By confirming a payment, you agree to Topo or the third-
            party payment service provider to charge the applicable amount.
        </div>
        <div class="my-2">
            Auto-renewal; automatic card payment
        </div>
        <div class="my-2">
            If you purchase an auto-renewing subscription through the app, the subscription fee
            will be periodically charged to your payment method until you cancel it. Upon the 
            expiration of your initial subscription, and again upon the expiration of your next 
            subscription period, your subscription will automatically renew for an equivalent 
            period at the price you agreed upon when subscribing. The payment details of the 
            bank card are stored and subsequently used for automatic payment by card in 
            accordance with the terms of the Agreement.
        </div>
        <div class="my-2">
            If you disagree with a charge that has already been charged, please direct your 
            objection to customer support if the charge was made directly through Topomatch, 
            or to the relevant third-party payment services such as the App Store. You can also 
            object to a payment by contacting your bank or payment service provider, who will 
            inform you of your rights and the refund deadlines. You may unilaterally revoke 
            your consent to automatic card payments at any time in your Settings in your 
            device or the relevant third party payment service, but you must pay all amounts 
            due at that time.
        </div>
        <div class="my-2">
            To change or cancel your subscription, please sign in to your third-party payment 
            provider account (or Topomatch Settings, if applicable) and follow the instructions 
            to cancel your subscription (even if you have deleted your account or the 
            Topomatch app from your device). Deleting the Topomatch account or the 
            Topomatch app from the device does not cancel or terminate the subscription; Topo
            will continue to charge your selected payment method until the subscription is 
            canceled on Topomatch or your third-party payment provider account. After 
            canceling a subscription, you can continue to use it until the end of the paid period, 
            after this period the subscription will not renewed.
        </div>
        <div class="my-2">
            Additional terms when sending payments directly to Topomatch using the selected 
            payment method. If you pay directly to Topomatch, Topomatch has the right to 
            correct any errors in your payment information, even after a payment request has 
            been submitted or payment has been received. If you initiate a refund or otherwise 
            reverse a payment made using your chosen payment method, Topomatch may 
            terminate your account immediately at its sole discretion.
        </div>
        <div class="my-2">
            You can change your payment method on Topomatch in Settings. If the charge fails 
            due to payment method expiration, lack of funds, or otherwise, and then you do not
            change your payment method information or cancel your subscription, you are 
            responsible for all outstanding payments and you give us permission to proceed 
            with the charge after update information about the payment method. This situation 
            may result in a change in the dates your payments are debited. In addition, you 
            authorize us to obtain an extended expiration date and updated number for your 
            credit or debit card from your card issuer. Payment terms depend on the Payment 
            Method you choose and may be subject to agreements between you and the 
            financial institution, credit card issuer, or other payment method provider you 
            choose. Residents outside the Americas agree that payment for Topomatch will be 
            made through MTCH Technology Services Limited.
        </div>
        <div class="my-2">
            Virtual items. You may acquire a limited, personal, non-transferable, non-
            sublicensable, revocable license to use "virtual items", which includes virtual 
            products, virtual "coins" or other items that can be exchanged for virtual products 
            within the Service (collectively - "Virtual Items"). The balance of Virtual Items 
            displayed in the account is not a real balance and does not correspond to any saved
            value. In fact, it reflects the scope of your license. Non-use of Virtual Items will not 
            incur any fees, however the license granted to you with respect to Virtual Items will 
            terminate in accordance with the terms of this Agreement if Topomatch 
            discontinues the Service or if your account is otherwise terminated. Topo reserves 
            the right, at its sole discretion, to change the cost of accessing Virtual Items and 
            may distribute Virtual Items for a fee or for free. Topo has the right to manage, 
            maintain, control, modify or destroy Virtual Items. In exercising these rights, Topo 
            shall not be liable to you or any third party. Virtual Items can only be obtained 
            through the Service. PURCHASE AND RECEIVING OF VIRTUAL ITEMS THROUGH THE 
            SERVICE IS FINAL AND NON-REFUNDABLE. The provision of Virtual Items for use 
            within the Service is a service that begins immediately upon confirmation of the 
            purchase of Virtual Items. YOU AGREE THAT TOPOMATCH IS NOT OBLIGED TO 
            REFUND THE VALUE OF VIRTUAL ITEMS OR OTHERWISE REFUND FOR UNUSED 
            VIRTUAL ITEMS IN THE EVENT OF BOTH VOLUNTARY OR INVOLUNTARY ACCOUNT 
            TERMINATION.
        </div>
        <div class="my-2">
            Refund. Generally, all purchase-related expenses are non-refundable. There are also
            no refunds or credits for early cancellation. We may make an exception if a refund 
            for a subscription was requested within fourteen days of the date of the transaction,
            or if such a refund is required by the laws of your country.
        </div>
        <div class="my-2">
            Subscribers residing in the EU or the European Economic Area, subject to local law, 
            are eligible for a full refund, without stating a reason, within 14 days of subscription 
            commencement. Please note that the 14-day period starts from the moment the 
            subscription starts.
        </div>
        <div class="my-2">
            Subject to local laws, users and purchasers residing in the Republic of Korea are 
            eligible for a full refund for a subscription and/or unused Virtual Items within 7 days 
            of purchase. Please note that the 7-day period starts from the date of purchase.
        </div>
        <div class="my-2">
            Except as noted above, for users residing in the Republic of Korea, purchases of 
            Virtual Items are FINAL and NON-REFUNDABLE.
        </div>
        <div class="my-2">
            To request a refund:
        </div>
        <div class="my-2">
            If the purchase was made with an Apple ID, refunds will be made through Apple, not
            Topomatch. To request a refund, open the App Store, tap your Apple ID, tap 
            Purchase History, find the transaction you want, and tap Report a Problem. You can 
            also submit a request at https://getsupport.apple.com.
        </div>
        <div class="my-2">
            If the purchase was made through a Google Play Store account, please contact 
            customer service with the Google Play Store order number (found in the order 
            confirmation email and Google Pay Send). You may also cancel your purchase by 
            regular mail by sending us a signed and dated cancellation notice. In this 
            notification, in addition to the order number, please also indicate the email address 
            or mobile phone number registered in the account. Notice should be sent to 
            Topomatch.
        </div>
        <div class="my-2">
            If you exercise your right to cancel (this does not apply to purchases made with an 
            Apple ID, for which Apple is responsible), we will refund (or ask Google to refund) all
            payments received from you as soon as possible, but no later than 14 days from the
            date of receipt of your notice of termination of the Agreement. The refund will be 
            made in the same way that the purchase was paid. Regardless of the cancellation 
            method you choose, no refund fees will be charged.
        </div>
        <div class="my-2">
            If the purchase was made through a payment platform not listed above, you should 
            submit a refund request to the provider through which the purchase was made.
        </div>
        <div class="my-2">
            You may not cancel an order for the delivery of digital content transmitted on a non-
            physical medium if the processing of the order began after receiving your express 
            consent and you have confirmed that you agree to the loss of the right to cancel. 
            This rule applies, for example, to the purchase of Virtual Items. This means that 
            such purchases are FINAL and NON-REFUNDABLE AND NON-REFUNDABLE.
        </div>
        <div class="my-2">
            Price policy. Topomatch operates globally and our prices vary based on a multitude 
            of factors. We frequently offer promotional rates that may vary by region, 
            subscription length, package size purchased, and more. We also regularly test new 
            features and payment methods.
        </div>
        <div class="my-2">
            11. Notice and Procedure for Submitting Complaints of Copyright Infringement
        </div>
        <div class="my-2">
            If you believe that your work has been copied and posted on the Service in a 
            manner that constitutes copyright infringement, please submit a copyright 
            infringement request to Topo’s customer service.
        </div>
        <div class="my-2">
            If you choose to contact us about a suspected copyright infringement, be sure to 
            include the following information:
        </div>
        <ul class="list my-3">
            <li>
                1. An electronic or physical signature of a person authorized to act on behalf of 
                the copyright owner;
            </li>
            <li>
                2. A description of the copyrighted work that you claim has been infringed;
            </li>
            <li>
                3. A description of the location of the infringing content on the Service (such a 
                description must be detailed enough to enable us to locate the infringing 
                content);
            </li>
            <li>
                4. Your contact details, including address, telephone number and e-mail 
                address, as well as information about the identity of the copyright holder;
            </li>
            <li>
                5.  A written statement from you that you have a good faith belief that the 
                disputed use is not authorized by the copyright owner, its agent, or the law;
            </li>
            <li>        
                6. A statement made by you under penalty of perjury that the above 
                information in your notice is accurate and that you are the copyright owner or
                authorized to act on the copyright owner's behalf.
            </li>
        </ul>
        <div class="my-2">
            Topomatch is committed to terminating the accounts of copyright infringers and 
            repeat offenders.
        </div>
        <div class="my-2">
            12. Disclaimer
        </div>
        <div class="my-2">
            Topo provides the Service in its existing condition and, if possible, in accordance 
            with applicable laws and regulations. Topo does not guarantee satisfactory quality, 
            commercial value, fitness for a particular purpose, or non-infringement. 
            TOPOMATCH DOES NOT WARRANT THAT: (A) THE SERVICE WILL BE 
            UNINTERRUPTED, SECURED OR ERROR FREE; (B) DEFECTS OR ERRORS IN THE 
            SERVICE WILL BE CORRECTED; (C) THE CONTENT OR INFORMATION YOU RECEIVE 
            THROUGH THE SERVICE ARE ACCURATE.
        </div>
        <div class="my-2">
            TOPOMATCH IS NOT RESPONSIBLE FOR ANY CONTENT YOU OR ANOTHER USER OR 
            THIRD-PARTY POSTS, SENDS OR RECEIVES THROUGH THE SERVICE. YOUR ACCESS 
            TO CONTENTS UPLOADED OR OTHERWISE OBTAINED THROUGH THE SERVICES IS AT
            YOUR OWN RISK.
        </div>
        <div class="my-2">
            13. Third Party Services
        </div>
        <div class="my-2">
            The Service may contain advertisements and promotions offered by third parties 
            and links to other websites or resources. Topo is not responsible for the availability 
            (or lack of availability) of such external sites or resources. If you choose to interact 
            with third parties through the Service, your relationship with them is governed by 
            the terms of such third parties. Topo is not responsible for such conditions or the 
            actions of third parties.
        </div>
        <div class="my-2">
            14. Limitation of Liability
        </div>
        <div class="my-2">
            In accordance with the current legislation, Topomatch, its affiliates, employees, 
            licensors or service providers are not responsible for any direct, indirect, 
            conditional, random, special, penal or serious losses, in particular, direct or indirect 
            profit loss, or ANY LOSS OF DATA, ABILITY TO USE, LOSS OF REPUTATION OR OTHER
            INTANGIBLE DAMAGES AS A RESULT OF: (I) YOUR ACCESS OR USE OF, OR AN 
            INABILITY TO ACCESS OR USE THE SERVICE; (II) ACTIONS OR CONTENT OF OTHER 
            USERS OR THIRD PARTIES PERFORMED IN OR RELATED TO THE SERVICE; (III) 
            UNAUTHORIZED ACCESS, USE OR MODIFICATION OF YOUR CONTENT, EVEN IF 
            TOPOMATCH HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSSES. 
            TOPOMATCH’S AGGREGATE LIABILITY FOR ALL CLAIMS REGARDING THE SERVICE 
            SHALL NOT EXCEED THE AMOUNT YOU PAID TO TOPOMATCH FOR THE SERVICE. 
        </div>
        <div class="my-2">
            15. Governing Law
        </div>
        <div class="my-2">
            For subscribers residing in the European Union, the European Economic Area, or 
            other countries where our arbitration agreement is prohibited by law, any dispute 
            arising out of this Agreement or the Service shall be governed by the laws of the 
            State of Nevada, United States. Notwithstanding the foregoing, the Arbitration 
            Agreement referred to in Section 15 above is governed by the Federal Arbitration 
            Act. For the avoidance of doubt, the selection of Nevada law as applicable does not 
            supersede other mandatory consumer protection laws in such jurisdictions.
        </div>
        <div class="my-2">
            16. Subscriber's Indemnity and Liability Guarantee
        </div>
        <div class="my-2">
            You agree (to the extent permitted by applicable law) to defend and hold harmless 
            Topomatch, our affiliates, officers, directors, agents, and employees from any 
            claims, demands and liabilities, and to indemnify for damages, costs, and expenses,
            including attorneys' fees arising from or related in any way to your access to or use 
            of the Service, your Content, or your violation of this Agreement.
        </div>
        <div class="my-2">
            17. Exhaustiveness of Agreement and Miscellaneous Terms
        </div>
        <div class="my-2">
            This Agreement, which includes the Privacy Policy, and any terms disclosed and 
            agreed by you when purchasing additional features, products, or services that we 
            offer within the Service, constitutes the entire agreement between you and 
            Topomatch with respect to your use of the Service. If any provision of this 
            Agreement is held invalid, the remainder of this Agreement shall remain in full force
            and effect. The failure of the Company to exercise or enforce any right or provision 
            of this Agreement shall not constitute a waiver of further exercise or enforcement of
            such right or provision. You agree that your Topomatch account is non-transferable 
            and the entirety of your rights, account, and Content terminates upon your death. 
            This Agreement does not create a joint venture, agency, partnership, employment, 
            fiduciary or any other relationship. However, you may not make any representations
            or incur any obligations on Topomatch's behalf. We are always looking for new and 
            innovative ways to help you learn about and provide up-to-date information about 
            our approach to Content management. This policy may change over time. We will 
            alert you before any major changes go into effect for you to review.
        </div>
`;
    }
}

terms.addEventListener("click", handleClick);

policy.addEventListener("click", handleClick);