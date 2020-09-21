export function halfOf(x){
    return x/2;
}

export function multiply(x, y){
    return x*y;
}

// default export
export default function(){
    alert("default function from lib is called");
};

export let flag = false;
export function touch(){
    flag = true;
}