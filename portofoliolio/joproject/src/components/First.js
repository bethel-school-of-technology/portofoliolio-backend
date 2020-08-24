import React from 'react'; 

 
/* class First extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        items: [
                {
                    id:0,
                    title: 'LinkedIn',
                    subTitle:'Where to find Me',
                    imgSrc: linkedIn,
                    links: 'https://www.linkedin.com/in/josephine-martinez-2a35b557/',
                    selected: false
                },
                {
                   id:1,
                   title: 'GitHub',
                   subTitle:'My Projects',
                   imgSrc: GitHub,
                   links: 'https://github.com/josie-m/starter-node-angular.git',
                   selected: false
               },
               {
                   id:2,
                   title: 'Gmail',
                   subTitle:'Send a Email',
                   imgSrc: gmail,
                   links: 'https://mail.google.com/mail/u/0/?tab=rm#inbox',
                   selected: false
               },
           
            ]
         
             }
            }
             handleCardClick = (id, card)=>{
             let items = [...this.state.items];
             items[id].selected=items[id].selected ? false:
             items.forEach(item => {
                 if (item.id !== id){
                     item.selected = false;
                 }
             });
             this.setState({
                 items
             });
             }
             makeItems = (items)=>{
             return <Card item={item} onClick={(e=> this.handleCardClick(item.id,e))} key={item.id}/>
             }
      render() {
          return (
              <Container fluid={true}>
                  <Row className='justify-content-around'>
                      {this.makeItems(this.state.items)}

                  </Row>
              </Container>
          );
      }
    }
            
            
            
     <   export default First;*/