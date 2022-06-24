import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts" //arquivo de importações no Deno

let aluno = 'Henrique Mendes'
let professores = ['João', 'Lais', 'Davi', 'Bruno Cano']


Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Henrique Mendes");
    assertStringIncludes(aluno, "Henrique Mendes"); 
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores,
        ["Davi", "Lais", "Allan"],
        "Opa! Algo deu errado!");
})
