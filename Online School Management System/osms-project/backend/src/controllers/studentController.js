exports.StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }

    async getSchedule(req, res) {
        try {
            const schedule = await this.studentService.getSchedule(req.params.studentId);
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async viewAssignments(req, res) {
        try {
            const assignments = await this.studentService.getAssignments(req.params.studentId);
            res.status(200).json(assignments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async submitWork(req, res) {
        try {
            const result = await this.studentService.submitWork(req.params.studentId, req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async checkAttendance(req, res) {
        try {
            const attendance = await this.studentService.getAttendance(req.params.studentId);
            res.status(200).json(attendance);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async viewGrades(req, res) {
        try {
            const grades = await this.studentService.getGrades(req.params.studentId);
            res.status(200).json(grades);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};