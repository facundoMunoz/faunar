import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class HospitalExecutor {

    public static void main(String[] args) {

        // Crear la 'pool' de doctores
        int cantSalas = Runtime.getRuntime().availableProcessors();
        ExecutorService poolDoctores = Executors.newFixedThreadPool(cantSalas);

        // Cargamos los pacientes
        for (int nro = 0; nro < 10000; nro++) {
            poolDoctores.submit(new Paciente(nro));
        }
        poolDoctores.shutdown();

    }

}
