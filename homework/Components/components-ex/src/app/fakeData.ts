///<reference path="article.ts"/>
import {Injectable} from '@angular/core';
import {Article} from "./article";

@Injectable()
export class FakeData {
    public getData() : Array<Article> {
      return [
        {
          title: 'First Article',
         description: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.11111111111111111111111111111111111111111111111',
         author: 'Author1',
         image: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
        },
        {
          title:'Second Article',
          description: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.2222222222222222222222222222222222222222222222',
          author: 'Author2',
          image: 'http://suttoncoldfieldhypnotherapy.co.uk/wp-content/uploads/2014/04/articles.jpg'
        },
        {
          title: 'Third Article',
          description: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.333333333333333333333333333333333333333333333333',
          author: 'Author3',
          image: 'http://www.ecaformacion.com/wp-content/uploads/2016/02/Article.jpg'
        },
        {
          title: 'Forth Article',
          description: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.4444444444444444444444444444444444444444444444444',
          author: 'Author4',
          image: 'https://hellboundbloggers.com/wp-content/uploads/2009/10/Great-Tips-For-Writing-A-Killer-Blog-Article.jpg'
        }
      ]
    };
}

