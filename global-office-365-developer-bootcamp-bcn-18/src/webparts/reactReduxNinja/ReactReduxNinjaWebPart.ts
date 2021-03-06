import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import App  from './components/app';
import { createStore } from './components/store';
import { Store } from 'redux';

export interface IReactReduxNinjaWebPartProps {
  description: string;
}

export default class ReactReduxNinjaWebPart extends BaseClientSideWebPart<IReactReduxNinjaWebPartProps> {
  private store:Store<{}>;
  constructor(props: IReactReduxNinjaWebPartProps) {
    super();
    this.store=createStore();
        }
  public render(): void {
    if (this.renderedOnce) { return; }

    const element: React.ReactElement<any > = React.createElement(
      App,
      {
        description: this.properties.description,
        domElement:this.domElement,
        store:this.store
      }
    );

    ReactDom.render(element, this.domElement);
    
       
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: ""
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: ""
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
