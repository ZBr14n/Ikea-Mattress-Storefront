// individual products (not a collections)
/***
 * Ad on the home page displays name, product option, and price --> use this data to query the mattress json file.
 * Whatever the front page suggest --> add it as a prop to search thru json.
 * 
 * when user is in mattress collection page, how do we pass user selection for a mattress to PDP?
 *  1. Approach #1 is to use the index of mattress JSON obj ==> extract data based on index.
 */

import React from 'react'
import '../../styles/PDP.css'

import mattress from '../../data/mattress.js'
import {Link,useParams} from 'react-router-dom'

import {Button} from 'react-bootstrap'

import {ItemContext} from '../../ItemContext'


function PDP() {
      
    
    // create JSON object to assign size with index value for price
    const indexValue = {
        'King': 3,
        'Queen': 2,
        'Double': 1,
        'Twin': 0
    }

    // user picks an options --> match current size with correct price.
    const [pdpUserOption,setUserOption] = React.useState('King')
    
    
    let {id} = useParams()
    let uniqueID = String(id)

    // count how many times the user goes back to product page to add another item to cart
    const [count, setCount] = React.useState(1)
    const [auxItemSubtotal, setItemSubtotal] = React.useState(0)
    
    // global store to record user selection (tracks uniqueID, # unique items, )
    const [context, setContext] = React.useContext(ItemContext);
    

    // check whether the same item id and size has already been added or not
    const handleDupeItems = (contextStore, ItemPrice, ItemName, count) => {
        let auxStore = []
        let auxIndex = -1
        
        // we want to update the cart if when user selects same item, but different size.
        contextStore.forEach(item => {
            
            let index = auxStore.findIndex(entry => entry.uniqueID === item.uniqueID && entry.pdpUserOption === item.pdpUserOption)         
                                                
            if(index === -1){                
                // if no matching values are found, continue pushing to auxStore
                auxStore.push({uniqueID: item.uniqueID, pdpUserOption: item.pdpUserOption, ItemPrice: item.ItemPrice, ItemName: item.ItemName, count: item.count, ItemSubtotal: item.ItemSubtotal})
            }         

            // if there is a match, return index greater than -1
            auxIndex = index                                                           
        })

        // incr. count for that specific index if there is a dupe item.
        if(auxIndex > -1){
            auxStore[auxIndex].count += 1
            auxStore[auxIndex].ItemSubtotal = (Number((auxStore[auxIndex].ItemPrice).replace(/[^\d.]/g, ''))) * auxStore[auxIndex].count
            setItemSubtotal(auxStore[auxIndex].ItemSubtotal)
        }
        console.log('auxStore: ' + auxItemSubtotal)                     
        return auxStore               
    }

    const handleContext = () => {
        let ItemPrice = matchSizePrice(pdpUserOption)
        let ItemName = mattress[id].name
                
        let newContext = []

        // record user selection and push it to global store auxItemSubtotal
        context.push({uniqueID, pdpUserOption, ItemPrice, ItemName, count, auxItemSubtotal})
        
        if(context.length >= 2){                                                           
            // filter for any duplicates when theres is 2 or more items.
            newContext = handleDupeItems(context, ItemPrice, ItemName, count)
            
            setContext(null)
            setContext(newContext)            
        }          
        // console.log("handleContext" + context)       
    }
    
    


    // filter the exact item index to display in pdp
    let filterData = mattress.filter((entry)=>{
        return entry.index.toString()===uniqueID
    })
    

    // assign index value for each size to correspond with price. e.g. index 0 should match twin size at price[0]
    const matchSizePrice = (pdpUserOption) => {
        return mattress[id].price[indexValue[pdpUserOption]]
    }



        
    return (
        
        <div style={{paddingTop:'2.5%'}}>
            <div className="pdp-page">

                <div className="pdp-container">
                    {
                        filterData.map((entry)=>(
                            
                                <div className="pdp-wrapper-info">
                                    
                                    <h1>{entry.name + ' '}Mattress</h1>
                                    <p>{entry.description}</p>
                                    <img src={entry.image} width="100%" alt="mat" />
                                    
                                </div>                            
                        ))                    
                    }
                </div>


                <div className="pdp-wrapper-options">
                    <h1>{matchSizePrice(pdpUserOption)}</h1>

                    <div className="pdp-group1">
                        <h3 style={{marginRight: '30px'}}><span>Mattress Size</span></h3>

                        <span className="pdp-group1-options">
                            <select onChange={(event)=>setUserOption(event.target.value)}>
                                <option value="King">King</option>
                                <option value="Queen">Queen</option>
                                <option value="Double">Double</option>
                                <option value="Twin">Twin</option>
                            </select>
                        </span>
                    </div>




                    <Link to="/cart">
                        <Button variant="primary" onClick={handleContext}>ADD TO CART</Button>
                    </Link>

                    
                    
                    
                </div>
                

            </div>

        </div>
        

    )
}

// const mapStateToProps = state => ({
//     count: state.count,
//     uniqueID: state.uniqueID
// })

// export default connect(mapStateToProps)(PDP)

export default PDP