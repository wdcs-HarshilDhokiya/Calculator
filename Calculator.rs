use std::io;
use regex::Regex;


fn main() {
    println!("Enter String to Calculate : ");

    let precedance = vec!["/","*","+","-"];
    let mut numbers: Vec<f32> = vec![];
    let mut operators: Vec<String> = vec![];

    let mut cal_str = String::new();
    io::stdin().read_line(&mut cal_str).expect("Failed To readline");

    println!("entered string: {}", cal_str);

    let cal_str: String = cal_str.trim().parse().expect("failed while parsing");

    // let regex = Regex::new(r"^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$").unwrap();  


    for i in Regex::new(r"\d{1,}").unwrap().find_iter(&cal_str) {
        // println!("reg {:#?}", i.as_str());
        let num = i.as_str().parse::<f32>().unwrap();
    
        println!("{:#?}", num);
        numbers.push(num);
    }

    for i in Regex::new(r"[+\-*\\/]+").unwrap().find_iter(&cal_str) {
        println!("{:?}", i.as_str());
        let sym = i.as_str().parse::<String>().unwrap();
        operators.push(sym);
    }


    println!("{:?}", numbers);
    println!("{:?}", operators);

    

    for i in 0..precedance.len() {
        let mut j=0;
        while operators.len() > 0 && j < operators.len() {
            
            if precedance[i] == operators[j] {
                let a = numbers[j];
                let b = numbers[j+1];
                println!("a: {} b: {}", a, b);

                println!("j: {j}");
                numbers.remove(j+1);
                numbers.remove(j);
                let temp = j;
               
                println!("numbers: {:?}", numbers);

                if operators[j] == "/" {
                    let div = a/b;
                    numbers.insert(j,div);
                }
                else if operators[j] == "*" {
                    let mul = a*b;
                    numbers.insert(j,mul);
                } 
                else if operators[j] == "+" {
                    let sum = a+b;
                    numbers.insert(j,sum);
                } 
                else {
                    let sub = a-b;
                    numbers.insert(j,sub);
                }
                
                println!("numbers: {:?}", numbers);
                operators.remove(temp);

                if operators.len() == 0 {
                    println!("Calculated : {:?}", numbers);
                }  
            }
            else {
                j+=1;
            }

           
        
        }
    }

}
+1
heavy_check_mark
blob-clap