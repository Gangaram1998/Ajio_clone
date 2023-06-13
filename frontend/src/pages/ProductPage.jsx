import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Text, Box, HStack, VStack, Checkbox, Skeleton, SimpleGrid, Select, Grid, RadioGroup, Radio, Toast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { GetData } from '../redux/getdataReducer/action'
import ProductCard from '../components/productCard'
import Paginantion from '../components/Pagination'
import Navbar from '../components/Navbar'


const ProductPage = () => {
    const [searchparams,setSearchparams]=useSearchParams()
    const location=useLocation()
    const dispatch=useDispatch()
    const {data,total,isLoading}=useSelector((store)=>store.getdataReducer)
    const [gen, setGen] = useState(true)
    const [cat, setCat] = useState(true)
    const [pr, setPr] = useState(true)
    const [dis, setDis] = useState(true)
    const inititalminPrice=searchparams.get("minPrice")
    const inititalmaxPrice=searchparams.get("maxPrice")
    const [minPrice,setminPrice]=useState(inititalminPrice || "")
    const [maxPrice,setmaxPrice]=useState(inititalmaxPrice || "")
    const inititalminDiscount=searchparams.get("minDiscount")
    const inititalmaxDiscount=searchparams.get("maxDiscount")
    const [minDiscount,setminDiscount]=useState(inititalminDiscount || "")
    const [maxDiscount,setmaxDiscount]=useState(inititalmaxDiscount || "")
    const [order,setorder]=useState("asc")
    const initailPage=searchparams.get("page")
    const [grid,setGrid]=useState(3)
    const [page,setPage]=useState(initailPage || 1)
    const {type,maincategory}=useParams()
    

    


    const handlePrice=(e)=>{
        const value=e.target.value.split("-");
        const minp=value[0]
        const maxp=value[1]
        setminPrice(minp)
        setmaxPrice(maxp)
        
    }

    const handleSort=(e)=>{
        let value=e.target.value
        setorder(value)
    }

    const handleDis=(e)=>{
        const value=e.target.value.split("-");
        const mind=value[0]
        const maxd=value[1]
        setminDiscount(mind)
        setmaxDiscount(maxd)
    }
        
    useEffect(()=>{
        
        let params={
            minPrice,
            maxPrice,
            minDiscount,
            maxDiscount,
            order,
            page,
            category:maincategory
        }
        setSearchparams(params)
    },[minPrice,maxPrice,minDiscount,maxDiscount,order,maincategory,page])

    let obj={
        params:{
            minPrice:searchparams.get("minPrice"),
            maxPrice:searchparams.get("maxPrice"),
            maxDiscount:searchparams.get("maxDiscount"),
            minDiscount:searchparams.get("minDiscount"),
            order:searchparams.get("order"),
            page:searchparams.get("page"),
            category:maincategory
        }
    }
    useEffect(()=>{
        dispatch(GetData(obj))
    },[location.search])


    if (isLoading) {
        return (
            <SimpleGrid
                m="auto"
                w="95%"
                pt={10}
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={15}
            >
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
                <Skeleton height="500px" />
            </SimpleGrid>
        )
    }
    return (
        <>
        <Navbar/>
        <Box height={"auto"} mt={"100px"}>
            <HStack mx={{base:"0",lg:"150px"}} height={"auto"}>
                <VStack width={"15%"} alignSelf={"flex-start"} display={{base:"none",md:"flex"}} >
                    <Text fontSize={"20px"} fontWeight={"500"}>Filter By</Text>
                    <Box textAlign={"start"} >
                        <Text fontSize={"16px"} fontWeight={"600"} onClick={() => setGen(!gen)}>Gender {!gen ? <AddIcon fontSize={"10px"} ml={"20px"} /> : <MinusIcon fontSize={"10px"} ml={"20px"} />}</Text>
                        <Box display={gen ? "block" : "none"}>
                            {type=="men" && <><Checkbox  value={"men"} >men</Checkbox><br /></>}
                            {type=="women" && <><Checkbox  value={"women"}>women</Checkbox><br /></>}
                            {type=="kids" && <><Checkbox  value={"boy"}>kids</Checkbox><br /></>}
                            {type=="home_and_kitchen" && <><Checkbox  value={"home_and_kitchen"}>Home & Kitchen</Checkbox><br /></>}
                        </Box>
                        <Text fontSize={"16px"} fontWeight={"600"} onClick={() => setCat(!cat)}>Category{!cat ? <AddIcon fontSize={"10px"} ml={"11px"} /> : <MinusIcon fontSize={"10px"} ml={"11px"} />}</Text>
                        <Box display={cat ? "block" : "none"}>
                            {type=="women" && <><Checkbox  value="saree" >saree</Checkbox><br /></>}
                            {type=="women" && <><Checkbox  value={"shirt-tops-tunics"}  >shirt tops tunics</Checkbox><br /></>}
                            {type=="women" && <><Checkbox  value={"kurta-kurti"}>kurta kurti</Checkbox><br /></>}
                            {type=="women" && <><Checkbox  value={"kurta-suits-sets"}>kurta suits sets</Checkbox><br /></>}
                            {type=="men" && <><Checkbox  value="saree">shirt</Checkbox><br /></>}
                            {type=="men" && <><Checkbox  value={"t-shirt"}>T shirt</Checkbox><br /></>}
                            {type=="men" && <><Checkbox  value={"jeans"}>jeans</Checkbox><br /></>}
                            {type=="men" && <><Checkbox  value={"hoodie"}>Hoodie</Checkbox><br /></>}
                        </Box>
                        <Text fontSize={"16px"} fontWeight={"600"} onClick={() => setPr(!pr)}>Price {!pr ? <AddIcon fontSize={"10px"} ml={"38px"} /> : <MinusIcon fontSize={"10px"} ml={"38px"} />}</Text>
                        <Box display={pr ? "block" : "none"}>
                            {/* <RadioGroup   onChange={(e)=>handlePrice(e)}>
                                <VStack>
                                    <Radio value={"0-500"}>Below Rs.500</Radio>
                                    <Radio value={"501-1000"}>Rs.501-1000</Radio>
                                    <Radio value={"1001-1500"}>Rs.1001-1500</Radio>
                                    <Radio value={"1501-2000"}>Rs.1501-2000</Radio>
                                    <Radio value={"2001-2500"}>Rs.2001-2500</Radio>
                                </VStack>
                            </RadioGroup> */}
                            <Checkbox onChange={handlePrice} value={"0-500"}>Below Rs.500</Checkbox><br />
                            <Checkbox onChange={handlePrice} value={"501-1000"}>Rs.501-1000</Checkbox><br />
                            <Checkbox onChange={handlePrice} value={"1001-1500"}>Rs.1001-1500</Checkbox><br />
                            <Checkbox onChange={handlePrice} value={"1501-2000"}>Rs.1501-2000</Checkbox><br />
                            <Checkbox onChange={handlePrice} value={"2001-2500"}>Rs.2001-2500</Checkbox><br />
                        </Box>
                        <Text fontSize={"16px"} fontWeight={"600"} onClick={() => setDis(!dis)}>Discount {!dis ? <AddIcon fontSize={"10px"} ml={"10px"} /> : <MinusIcon fontSize={"10px"} ml={"10px"} />}</Text>
                        <Box display={dis ? "block" : "none"}>
                            <Checkbox onChange={handleDis} value={"0-20"}>0-20%</Checkbox><br />
                            <Checkbox onChange={handleDis} value={"21-30"}>21-30%</Checkbox><br />
                            <Checkbox onChange={handleDis} value={"31-40"}>31-40%</Checkbox><br />
                            <Checkbox onChange={handleDis} value={"41-50"}>41-50%</Checkbox><br />
                            <Checkbox onChange={handleDis} value={"51-80"}>51-80%</Checkbox><br />
                        </Box>

                    </Box>
                </VStack>
                <VStack width={{base:"90%",lg:"80%"}} height={"1000px"} bor={"1px solid red"} alignSelf={"baseline"}>
                    <Box>
                        <Text color={"gray.400"} fontSize={"15px"}>{type.toUpperCase()}'S</Text>
                        <Text my={"20px"} fontSize={"25px"} fontWeight={"700"}>{maincategory.split("_").join(" ").toUpperCase()}</Text>
                    </Box>
                    <Box borderTop={"1px solid gray"} borderBottom={"1px solid gray"}  width={"100%"} bg={"gray.100"} height={"50px"} boxSizing='borderBox' display={"flex"} px={"20px"} alignItems={"center"} justifyContent={"space-between"}>
                        <Text fontFamily={"SourceSansPro"} fontSize={"18px"} fontWeight={"600"} >Total: {total}</Text>
                        <Box color={"white"} width={"120px"} height={"28px"} display={{base:"none",lg:"flex"}} textAlign={"center"} justifyContent={"space-between"} padding={"2px"}>
                            <Box border={"1px solid gray"} bg={"gray"} width={"25px"} onClick={()=>setGrid(1)}>1</Box>
                            <Box border={"1px solid gray"} bg={"gray"} width={"25px"} onClick={()=>setGrid(2)}>2</Box>
                            <Box border={"1px solid gray"} bg={"gray"} width={"25px"} onClick={()=>setGrid(3)}>3</Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} width={"20%"}>
                            <Text color={"gray.500"} fontFamily={"SourceSansPro"} fontSize={"18px"} display={{base:"none",md:"block"}}>Sort</Text>
                        <Select onChange={handleSort} color={"gray.500"} ml={"20px"}  bg={"white"} borderRadius={"none"} height={"80%"}  border={"1px solid black"}>
                            <option value="" color='black' >Relevance</option>
                            <option value="asc"  color='black'>price (lowest first)</option>
                            <option value="desc"   color='black'>price (highest first)</option>
                        </Select>
                        </Box>
                        
                    </Box>
                    <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:`repeat(${grid}, 1fr)`}} gap={6}>
                        {
                            data.length>0 && data.map((el)=><ProductCard key={el._id} image={el.image} brand={el.brand} name={el.name} price={el.price} discount={el.discount} id={el._id} />)
                        }
                    </Grid>
                    <Paginantion page={page} setPage={setPage} total={total}/>
                </VStack>
            </HStack>
        </Box>
        </>
    )
}

export default ProductPage