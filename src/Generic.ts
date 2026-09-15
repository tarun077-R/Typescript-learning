function wrapInArray<T>(item:T):T[]{
    return [item]

}
wrapInArray("masala")
wrapInArray(42)

wrapInArray({flavour:'Ginger'})

function pair<A,B>(a:A,b:B):[A,B]{
return [a,b]
}
pair("Tarun",{age:24})
pair("masala",20)
pair("rahul",{age:26})

interface Box<T>{
    content:T
}

const numberBox:Box<number>={content:10}

interface ApiPromise<T>{
    stauts:number,
    data:T
}

const res : ApiPromise<{flavor:string}> ={
stauts:200,
data:{
    flavor:"masala"
}
}