set terminal png transparent size 640,240
set size 1.0,1.0

set terminal png transparent size 640,480
set output 'lines_of_code_by_author.png'
set key left top
set yrange [0:]
set xdata time
set timefmt "%s"
set format x "%Y-%m-%d"
set grid y
set ylabel "Lines"
set xtics rotate
set bmargin 6
plot 'lines_of_code_by_author.dat' using 1:2 title "Fridolin Pokorny" w lines, 'lines_of_code_by_author.dat' using 1:3 title "thoth-zuul[bot]" w lines, 'lines_of_code_by_author.dat' using 1:4 title "Fridolín Pokorný" w lines, 'lines_of_code_by_author.dat' using 1:5 title "Kebechet" w lines, 'lines_of_code_by_author.dat' using 1:6 title "Christoph Görn" w lines, 'lines_of_code_by_author.dat' using 1:7 title "Thoth Bot" w lines, 'lines_of_code_by_author.dat' using 1:8 title "kebechet" w lines, 'lines_of_code_by_author.dat' using 1:9 title "Sushmitha Nagarajan" w lines, 'lines_of_code_by_author.dat' using 1:10 title "Subin" w lines, 'lines_of_code_by_author.dat' using 1:11 title "Marek Cermak" w lines, 'lines_of_code_by_author.dat' using 1:12 title "Marcel Hild" w lines, 'lines_of_code_by_author.dat' using 1:13 title "Dependencies.io Bot" w lines, 'lines_of_code_by_author.dat' using 1:14 title "Akash" w lines
