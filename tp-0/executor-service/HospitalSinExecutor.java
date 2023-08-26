public class HospitalSinExecutor {

    public static void main(String[] args) {

        // Un doctor por tarea
        for (int nro = 0; nro < 10000; nro++) {
            Thread doctor = new Thread(new Paciente(nro));
            doctor.start();
        }

    }

}
