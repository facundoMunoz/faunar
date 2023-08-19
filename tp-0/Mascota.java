import javax.swing.*;
import java.awt.*;

public class Mascota extends JPanel {

    private static String nombreMascota;
    // GUI
    private static int WIDTH = 550;
    private static int HEIGHT = 750;
    private static JLabel labelNombre = new JLabel(nombreMascota, SwingConstants.CENTER);
    private static JLabel labelMensaje = new JLabel("", SwingConstants.CENTER);
    private static JLabel labelImagen = new JLabel("", SwingConstants.CENTER);
    // Botones
    private static JButton botonAlimentar = new JButton("Alimentar");
    private static JButton botonJugar = new JButton("Jugar");
    private static JButton botonDormir = new JButton("Dormir");
    private static JButton botonEstado = new JButton("Estado");
    // Animaciones
    private static int idle = 0;

    public Mascota() {
        JFrame frame = new JFrame("Mascota Virtual");
        JPanel panel = new JPanel(null);

        panel.setBackground(new Color(192, 185, 169));

        // Nombre
        labelNombre.setFont(new Font(labelNombre.getFont().getName(), Font.PLAIN, 50));
        labelNombre.setBounds(0, 10, WIDTH, 60);
        setNombre("Nina");
        panel.add(labelNombre);
        // Mensaje
        labelMensaje.setFont(new Font(labelMensaje.getFont().getName(), Font.PLAIN, 20));
        labelMensaje.setBounds(0, 60, WIDTH, 60);
        setMensaje("¡Miau!");
        panel.add(labelMensaje);
        // Imagen
        labelImagen.setIcon(new ImageIcon("images/idle-0.png"));
        labelImagen.setBounds(0, 0, WIDTH, HEIGHT);
        panel.add(labelImagen);

        // Botones
        // Alimentar
        botonAlimentar.setBounds(80, 620, 110, 30);
        botonAlimentar.setFocusPainted(false);
        panel.add(botonAlimentar);
        // Jugar
        botonJugar.setBounds(215, 620, 110, 30);
        botonJugar.setFocusPainted(false);
        panel.add(botonJugar);
        // Dormir
        botonDormir.setBounds(350, 620, 110, 30);
        botonDormir.setFocusPainted(false);
        panel.add(botonDormir);
        // Estado
        botonEstado.setBounds(215, 670, 110, 30);
        botonEstado.setFocusPainted(false);
        panel.add(botonEstado);

        // Iniciar frame
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setMinimumSize(new Dimension(WIDTH, HEIGHT));
        frame.setResizable(false);
        frame.setVisible(true);
        frame.add(panel, BorderLayout.CENTER);
    }

    private static void animarIdle() {
        labelImagen.setIcon(new ImageIcon("images/idle-" + idle + ".png"));
        if (idle == 1) {
            idle = 0;
        } else {
            idle = 1;
        }
    }

    public void setNombre(String nuevoNombre) {
        labelNombre.setText(nuevoNombre);
    }

    public void setMensaje(String nuevoMensaje) {
        labelMensaje.setText(nuevoMensaje);
    }

    public static void main(String[] args) {
        new Mascota();

        try {
            while (true) {
                animarIdle();
                Thread.sleep(500);
            }
        } catch (Exception e) {
        }
    }

}
