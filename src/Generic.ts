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