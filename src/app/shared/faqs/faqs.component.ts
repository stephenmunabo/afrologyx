import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  me;

  faqs: any = [
    {title: 'Define Afrology', question: 'What is the meaning of Afrology?', answer: `
    Wiki Pedia defines Afrology as:

Afrology is a scientific study of the organization of the contemporary social structures of Africa. It places in the heart of African social change the notion of identity.

Afrology is a way of thinking about the various forms of social, institutional and personal identification. It posits that each individual, though determined by mental and psychological structures, reconstructs himself within the framework of specific or general broad collective identities, of which the modern State is an example.

This identity remains to be created in Africa. The problem arising in contemporary Africa is that of the reality of this State, federator of the institutions of socialization like the family, the village and the market, is for the most part unrealized. The collective identity, its delimitations, and its instrumentalization by politics consequently constitute the major axes of the comprehension of African society.
    `},
    {title: 'Define Afrodiaspora/Afrodiasporians', question: 'What is meaning Afrodiaspora/Afrodiasporians?', answer: 'The African diaspora consists of the worldwide collection of communities descended from Africa\'s peoples, predominantly in the Americas. Afrodiasporians is a word derived from Afrodiaspora, we created this word as another way of grouping people in the Afro-Diaspora.'},
    {title: 'Membership', question: 'How do I become a member?', answer: 'To become a member, simply go to the following link and registers https://Afrologyx.com/join'},
    {title: 'Registration Fees', question: 'Is there a registration fee for becoming a member?', answer: 'Membership to the Afrologyx club is completely free.'},
    {title: 'Membership Perks', question: 'What are the membership perks, what do I get for joining?', answer: 'Our list of membership perks is constantly growing as we partner up with a community organization. You can find a comprehensive list here '},
    {title: 'Events and Afrologyx', question: 'Is Afrologyx all about events?', answer: 'Afroloyx is a community club, we cater to the Dallas African diaspora, people who are interested in upscale events, entrepreneurs, creative and Afrocentric lifestyle. We organize events that touch on the deferent aspect of our growth life. '},
    {title: 'Business Membership', question: 'Can my business join or support Afrologyx?', answer: 'We welcome businesses to join our community, we work closely with businesses to bring their services to our community.'},
    {title: 'Mobile App', question: 'Is there a mobile App for AfrologyX?', answer: 'We are diligently working on developing a mobile experience for our users. For the moment there is not, however, is a project that\'s currently underway.'},
    {title: 'Events Frequency', question: 'How often do you host events?', answer: 'We host 1 event per month'},
    {title: 'Types of events', question: 'What type of events do you host?', answer: 'We host events such as Concerts, NightClub, Comedy Shows, Networking etc. We pride ourselves in making sure our events are classy by imposing a strict dress code.'},
    

  ]
  constructor() { }

  ngOnInit() {
  } 
  
  showFaq(i) {
    this.me = i;
    
  }

}
