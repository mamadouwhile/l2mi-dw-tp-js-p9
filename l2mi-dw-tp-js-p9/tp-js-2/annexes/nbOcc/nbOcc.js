function nbOcc(s, ss){

    let index = (s.indexOf(ss));
    let occ = 0;
    
    while(index !== -1){
        occ ++;
        index = s.indexOf(ss,index + 1);
    }

    return occ;
}