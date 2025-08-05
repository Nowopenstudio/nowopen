import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list';
export const myStructure = (S:any,context:any) =>
    S.list()
      .title('Content')
      .items([
        orderableDocumentListDeskItem({type: 'work',title: 'Work', S, context}),

  

        
  
          ...S.documentTypeListItems().filter(listItem => !['mux.videoAsset'].includes(listItem.getId())),
  
        
    
    
  ])