const { evaluateScholarship, Status } = require("./ScholarshipEligibilityEvaluator");

describe("Suíte de Testes", () => {
    test("Retorna APPROVED quando atende a todos os critérios", () => {
        const result = evaluateScholarship(20,9.0, 95.0, true, false);

        expect(result.status).toBe(Status.APPROVED);
        expect(result.reasons).toContain("Applicant meets all scholarship requirements.");
    });

    test("Retorna APPROVED quando está na borda dos critérios", () => {
        const result = evaluateScholarship(18,7.0, 80.0, true, false);

        expect(result.status).toBe(Status.APPROVED);
        expect(result.reasons).toContain("Applicant meets all scholarship requirements.");
    });

    test("Retorna REJECTED quando a idade é menor que 16", () => {
        const result = evaluateScholarship(15,8.0,90.0,true,false);
        
        expect(result.status).toBe(Status.REJECTED);
        expect(result.reasons).toContain("Applicant is younger than the minimum age.");
    })
    
    test("Retorna REJECTED quando o GPA é menor que 6.0", () => {
        const result = evaluateScholarship(23,5.9,80.0,true,false);
        
        expect(result.status).toBe(Status.REJECTED);
        expect(result.reasons).toContain("GPA is below the minimum required.");
    })
    
    test("Retorna REJECTED quando a taxa de presença é menor que 75%", () => {
        const result = evaluateScholarship(19,7.5,74.9,true,false);
        
        expect(result.status).toBe(Status.REJECTED);
        expect(result.reasons).toContain("Attendance rate is below the minimum required.");
    })
    
    test("Retorna REJECTED quando os cursos obrigatórios não foram concluídos", () => {
        const result = evaluateScholarship(19,7.5,90.0,false,false);
        
        expect(result.status).toBe(Status.REJECTED);
        expect(result.reasons).toContain("Required courses have not been completed.");
    })
    
    test("Retorna REJECTED quando o candidato tem um histórico disciplinar", () => {
        const result = evaluateScholarship(19,7.5,100.0,true,true);
        
        expect(result.status).toBe(Status.REJECTED);
        expect(result.reasons).toContain("Applicant has a disciplinary record.");
    })
    
    test("Retorna MANUAL_REVIEW quando a idade é exatamente 16", () => {
        const result = evaluateScholarship(16,7.5,85.0,true,false);
        expect(result.status).toBe(Status.MANUAL_REVIEW);
        expect(result.reasons).toContain("Applicant is under 18 and requires manual review.");
    });

    test("Retorna MANUAL_REVIEW quando o GPA é exatamente 6.0", () => {
        const result = evaluateScholarship(18,6.0,85.0,true,false);
        
        expect(result.status).toBe(Status.MANUAL_REVIEW);
        expect(result.reasons).toContain("GPA is in the manual review range.");
    });

    test("Retorna MANUAL_REVIEW quando a taxa de presença é exatamente 75%", () => {
        const result = evaluateScholarship(18,6.5,75.0,true,false);

        expect(result.status).toBe(Status.MANUAL_REVIEW);
        expect(result.reasons).toContain("Attendance rate is in the manual review range.");
    });
    
    test("Retorna um erro quando o GPA é maior que 10", () => {
        expect(() => { evaluateScholarship(20, 10.1,90.0,true,false);}).toThrow("GPA must be between 0 and 10.");
    });

    test("Retorna um erro quando o GPA é menor que 0", () => {
        expect(() => { evaluateScholarship(20,-0.1,90.0,true,false);}).toThrow("GPA must be between 0 and 10.");
    })

    test("Retorna um erro quando a taxa de presença é maior que 100%", () => {
        expect(() => { evaluateScholarship(20,7.0,101.0,true,false);}).toThrow("Attendance rate must be between 0 and 100.");
    })
    
    test("Retorna um erro quando a taxa de presença é menor que 0%", () => {
        expect(() => { evaluateScholarship(20,7.0,-1,true,false);}).toThrow("Attendance rate must be between 0 and 100.");
    })
});