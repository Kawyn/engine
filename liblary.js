function Import(file) {

    let output = file.split('|');;

    let vertices = output[0];
    let faces = output[1];

    let temp = [];


    // Vertices...
    vertices = vertices.split('v');

    vertices.forEach(v => {

        v = v.split(' ');
        v.shift();

        temp.push(new Vector3(v[0], v[1], v[2]));
    });

    vertices = temp;
    temp = [];

    // Faces...
    faces = faces.split('f');
    faces.shift();
    faces.forEach(f => {

        f = f.split(' ');
        f.shift();

        temp.push([parseFloat(f[0]), parseFloat(f[1]), parseFloat(f[2])]);
    });

    faces = temp;
    temp = [];

    console.log(faces, vertices);
    faces.forEach(p => {
        temp.push(
            new Polygon([vertices[p[0]], vertices[p[1]], vertices[p[2]]])
        );
    });

    return temp;
}

let edges = false;

const Draw = {

    Clear() {
        screen.fillStyle = skybox;
        screen.fillRect(0, 0, canvas.width, canvas.height);
    },

    Polygon: (x1, y1, x2, y2, x3, y3, color) => {
        screen.beginPath();
        screen.moveTo(x3, y3);
        screen.lineTo(x1, y1);
        screen.lineTo(x2, y2);
        screen.lineTo(x3, y3);
        screen.fillStyle = color;
        screen.fill();
        if (!edges)
            screen.strokeStyle = color;
        else
            screen.strokeStyle = '#000000'
        screen.stroke();
    }
}



const axis =
    `v 0.860000 0.460000 -0.860000
v 0.860000 0.460000 -0.460000
v 0.460000 0.460000 -0.460000
v 0.460000 0.460000 -0.860000
v 0.860000 0.860000 -0.860000
v 0.860000 0.860000 -0.460000
v 0.460000 0.860000 -0.460000
v 0.460000 0.860000 -0.860000
v 0.860001 0.460001 -5.860000
v 0.460001 0.460001 -5.860000
v 0.860001 0.860001 -5.860000
v 0.460001 0.860001 -5.860000
v 5.860000 0.460000 -0.860000
v 5.860000 0.460000 -0.460000
v 5.860000 0.860000 -0.860000
v 5.860000 0.860000 -0.460000
v 0.860000 5.860000 -0.860000
v 0.860000 5.860000 -0.460000
v 0.460000 5.860000 -0.860000
v 0.460000 5.860000 -0.460000
|
f 2 4 1
f 7 19 8
f 2 16 6
f 2 7 3
f 7 4 3
f 1 11 5
f 9 12 11
f 8 11 12
f 8 10 4
f 4 9 1
f 15 14 13
f 5 13 1
f 1 14 2
f 6 15 5
f 19 18 17
f 8 17 5
f 6 20 7
f 5 18 6
f 2 3 4
f 7 20 19
f 2 14 16
f 2 6 7
f 7 8 4
f 1 9 11
f 9 10 12
f 8 5 11
f 8 12 10
f 4 10 9
f 15 16 14
f 5 15 13
f 1 13 14
f 6 16 15
f 19 20 18
f 8 19 17
f 6 18 20
f 5 17 18`;

const fox = `v -0.175055 2.997729 1.961782
v 0.000000 3.041001 2.179651
v 0.008545 3.656654 3.474045
v 0.000000 4.417872 -4.461075
v -0.570719 4.547318 -4.465412
v -0.417481 4.469842 -4.883296
v -0.455317 4.914987 -4.974752
v -0.256223 5.027571 -5.230629
v 0.000000 4.768840 -5.671589
v -0.318788 4.483434 -5.263173
v -0.131505 4.685662 -5.670913
v -0.852459 4.989316 -4.360553
v -0.705971 4.459593 -3.679133
v -0.850259 4.848526 -3.592542
v -0.430431 2.527452 -1.915735
v -0.326911 2.522516 -1.869208
v -0.383107 2.313919 -1.779525
v -0.405154 5.958221 -4.350989
v -0.810845 5.637260 -4.164536
v -1.071992 6.717203 -4.308936
v 0.000000 4.308283 -5.028081
v 0.000000 4.573112 -5.671634
v 0.000000 4.122330 -3.670401
v -0.599449 3.652069 3.206534
v -0.299726 3.607659 3.150893
v -0.581414 2.963204 1.407759
v -0.462567 2.915257 0.847793
v 0.000000 2.796328 0.842387
v 0.000000 2.799920 0.957781
v -0.080060 2.890385 1.416945
v 0.000000 2.890521 1.416967
v -0.383087 2.349087 2.909524
v -0.262745 2.499894 -1.655918
v -0.145070 2.468721 -1.361992
v -0.308285 2.176283 -1.396150
v -0.332030 1.292551 5.954870
v 0.000000 1.217024 5.909102
v -0.249936 1.257687 7.321659
v -0.545082 1.518242 6.200669
v 0.000000 3.250005 5.792698
v -0.406043 2.042689 6.647036
v -0.221191 1.572339 7.443752
v -0.545204 2.923898 0.848187
v -0.752268 3.114014 0.856828
v -0.427963 2.796637 -0.963506
v 0.000000 3.114308 -2.383793
v -0.185901 3.045967 -2.094258
v -0.575978 3.184158 -2.334644
v -0.597290 3.929562 -3.067056
v -0.735706 4.179379 -3.041212
v -0.315203 2.924855 1.422220
v 0.000000 2.728647 -1.331628
v -0.358572 3.732887 3.482757
v 0.000000 1.714901 7.499341
v 0.000000 1.191378 7.294476
v 0.175055 2.997729 1.961782
v 0.000000 3.713463 -3.089413
v 0.417481 4.469842 -4.883296
v 0.570719 4.547318 -4.465412
v 0.455317 4.914987 -4.974752
v 0.256223 5.027571 -5.230629
v 0.318790 4.483434 -5.263173
v 0.131508 4.685662 -5.670913
v 0.852459 4.989316 -4.360553
v 0.705971 4.459593 -3.679133
v 0.850259 4.848526 -3.592542
v 0.430431 2.527452 -1.915735
v 0.383107 2.313919 -1.779525
v 0.326911 2.522516 -1.869208
v 0.405154 5.958221 -4.350989
v 1.071992 6.717203 -4.308936
v 0.810845 5.637260 -4.164536
v 0.599449 3.652069 3.206534
v 0.299723 3.607659 3.150893
v 0.462565 2.915257 0.847793
v 0.581414 2.963204 1.407759
v 0.080060 2.890385 1.416947
v 0.383087 2.349087 2.909524
v 0.262745 2.499894 -1.655918
v 0.308285 2.176283 -1.396150
v 0.145070 2.468721 -1.361992
v 0.332030 1.292551 5.954870
v 0.249936 1.257687 7.321659
v 0.545080 1.518242 6.200669
v 0.221188 1.572339 7.443752
v 0.406043 2.042689 6.647036
v 0.545204 2.923898 0.848187
v 0.427963 2.796637 -0.963506
v 0.752268 3.114014 0.856828
v 0.575981 3.184158 -2.334644
v 0.185901 3.045967 -2.094258
v 0.597290 3.929562 -3.067056
v 0.735706 4.179379 -3.041212
v 0.315203 2.924855 1.422220
v 0.375661 3.732887 3.482757
v 0.850721 3.210366 1.409455
v -0.850721 3.210366 1.409455
v 0.000000 2.804435 3.723698
v -0.508473 2.918298 3.825926
v -0.853088 3.171569 0.859444
v -0.860808 3.044935 -0.935754
v 0.000000 5.536208 1.263321
v 0.000000 5.523559 0.966353
v -0.509471 5.182519 0.950850
v -0.849798 5.001794 2.046231
v -0.794033 4.826031 3.211002
v -0.910731 4.194526 3.217249
v -0.598662 4.137726 3.485886
v -0.981707 4.226298 2.098765
v -0.794112 2.382008 -1.141910
v -0.857036 5.163774 -1.931975
v 0.000000 5.695502 -1.926475
v 0.000000 6.088278 -2.736585
v -0.954068 4.581832 -1.865829
v -0.662966 5.661555 -2.783695
v -0.884585 5.472129 -3.468752
v -0.398805 6.139466 -3.512510
v 0.000000 6.267667 -3.504925
v 0.000000 6.063845 -4.357303
v -0.208280 5.298358 -4.909750
v 0.000000 5.240430 -4.988596
v -0.851169 4.367711 -3.021732
v -0.792984 2.764746 1.542564
v -0.554043 1.806584 4.846318
v -0.852459 4.917080 -0.688932
v 0.000000 5.453061 -0.688932
v 0.000000 5.637901 -1.364908
v 0.000000 5.507339 2.179651
v 0.000000 5.219811 3.206534
v 0.008545 4.787210 3.479522
v -0.987241 2.600323 2.276716
v -0.602016 2.752506 1.446440
v -0.775501 2.375721 2.916907
v -0.593731 2.389788 3.109776
v -0.694328 1.643289 3.248225
v -0.745154 1.612071 3.203351
v -0.734536 1.344910 3.303564
v -0.407238 1.355497 3.261098
v -0.423659 1.510611 2.894155
v -0.395817 1.550247 3.032903
v -0.535181 1.666510 3.281606
v -0.596021 1.701567 3.332000
v -0.597063 1.388794 3.432995
v -0.377310 1.567175 3.093620
v -0.401451 1.593628 3.176838
v -0.662194 1.758285 2.593266
v -0.888194 2.461560 -1.364017
v -0.769469 1.446272 -1.319950
v -0.382486 2.461560 -1.140096
v -0.504013 1.507546 -1.238611
v 0.852459 3.622482 -2.274444
v 0.803830 2.520806 -1.853079
v 0.597115 2.541704 -2.050132
v 0.000000 4.384417 4.127305
v -0.471909 4.435333 3.531663
v -0.539746 3.908250 4.229609
v -0.734008 2.139562 5.039536
v -0.646563 3.430549 4.035743
v 0.615751 4.137726 3.485886
v 0.488998 4.435333 3.531663
v 0.550788 3.908250 4.229609
v 0.657602 3.430549 4.035743
v -0.663588 2.946034 5.503745
v 0.000000 1.715302 4.810142
v -0.485582 3.184356 5.638057
v -0.910350 5.141984 -2.874346
v -0.597115 2.541704 -2.050132
v -0.933387 3.754129 0.885924
v -0.854731 5.039509 -1.305816
v -0.850872 4.967566 0.941080
v -0.786018 2.117315 -1.698755
v 0.508471 2.918298 3.825926
v 0.860808 3.044935 -0.935754
v 0.853088 3.171569 0.859444
v 0.849798 5.001794 2.046231
v 0.509471 5.182519 0.950850
v 0.958024 4.530962 -1.298551
v 0.858664 3.193210 -1.279442
v 0.954068 4.581832 -1.865829
v 0.794033 4.826031 3.211002
v 0.910729 4.194526 3.217249
v 0.981707 4.226298 2.098765
v 0.794112 2.382008 -1.141910
v 0.857038 5.163774 -1.931975
v 0.662966 5.661555 -2.783695
v 0.884585 5.472129 -3.468752
v 0.398807 6.139466 -3.512510
v -0.852459 3.622482 -2.274444
v 0.208280 5.298358 -4.909750
v 0.851169 4.367711 -3.021732
v 0.792984 2.764746 1.542564
v 0.554043 1.806584 4.846318
v 0.852459 4.917080 -0.688932
v 0.987241 2.600323 2.276716
v 0.602016 2.752506 1.446440
v 0.775501 2.375721 2.916907
v 0.593728 2.389788 3.109776
v 0.694325 1.643289 3.248225
v 0.734536 1.344910 3.303564
v 0.745152 1.612074 3.203351
v 0.423657 1.510611 2.894155
v 0.535179 1.666510 3.281606
v 0.597060 1.388794 3.432995
v 0.596021 1.701567 3.332000
v 0.377310 1.567175 3.093620
v 0.407238 1.355497 3.261098
v 0.401451 1.593628 3.176838
v 0.662194 1.758285 2.593266
v 0.395817 1.550247 3.032903
v 0.769469 1.446272 -1.319950
v 0.888194 2.461560 -1.364017
v 0.504013 1.507546 -1.238611
v 0.382486 2.461560 -1.140096
v 0.663588 2.946034 5.503745
v 0.734008 2.139562 5.039536
v 0.485582 3.184356 5.638057
v 0.910353 5.141984 -2.874346
v 0.933387 3.754129 0.885924
v 0.854731 5.039509 -1.305816
v 0.850872 4.967566 0.941080
v 0.786018 2.117315 -1.698755
v 0.973434 4.332704 0.912224
v 0.961939 4.480573 -0.736665
v -0.973434 4.332704 0.912224
v -0.961939 4.480573 -0.736665
v -0.803828 2.520806 -1.853079
v 0.606018 2.271060 -1.930275
v -0.606018 2.271060 -1.930275
v -0.858664 3.193210 -1.279440
v -0.958024 4.530962 -1.298551
v 0.781744 1.499866 3.085457
v -0.781744 1.499866 3.085457
v -0.651219 1.364309 2.835625
v -0.386275 0.371666 2.887588
v -0.794407 0.622380 2.975014
v -0.590107 0.008899 2.927484
v -0.797355 0.273439 2.808259
v -0.438525 0.557588 2.850234
v -0.475491 0.020020 2.362310
v -0.381097 -0.010364 2.720412
v -0.792810 -0.008718 2.717769
v -0.676073 0.024032 2.363560
v -0.591741 0.550043 2.761093
v -0.681273 0.646204 -1.292767
v -0.482565 0.433114 -1.383339
v -0.376686 1.492140 -1.391123
v -0.703758 1.425450 -1.729864
v -0.599681 1.428118 -1.855277
v -0.592637 0.490840 -1.771886
v -0.505919 1.445413 -1.729893
v -0.389439 1.456522 -1.649349
v -0.396201 0.540449 -1.510265
v -0.345448 1.484791 -1.444388
v -0.760481 1.435863 -1.652599
v -0.441412 0.067852 -1.999844
v -0.417788 -0.005097 -1.462730
v -0.740758 -0.003802 -1.464754
v -0.716919 0.048201 -1.986240
v -0.752397 0.436899 -1.440903
v -0.725575 0.504476 -1.589517
v -0.603996 0.019188 -2.146018
v 0.651219 1.364309 2.835625
v 0.386275 0.371666 2.887588
v 0.794405 0.622380 2.975014
v 0.590107 0.008899 2.927484
v 0.797353 0.273439 2.808259
v 0.438525 0.557588 2.850234
v 0.475491 0.020020 2.362310
v 0.381097 -0.010364 2.720412
v 0.792808 -0.008718 2.717769
v 0.676073 0.024032 2.363560
v 0.591741 0.550043 2.761093
v 0.681276 0.646204 -1.292767
v 0.376686 1.492140 -1.391123
v 0.482568 0.433114 -1.383339
v 0.703758 1.425450 -1.729864
v 0.592637 0.490840 -1.771886
v 0.599681 1.428118 -1.855277
v 0.505919 1.445413 -1.729893
v 0.396203 0.540449 -1.510265
v 0.389439 1.456522 -1.649349
v 0.345448 1.484794 -1.444388
v 0.725575 0.504476 -1.589517
v 0.760481 1.435863 -1.652599
v 0.441412 0.067852 -1.999844
v 0.417788 -0.005097 -1.462730
v 0.716919 0.048201 -1.986240
v 0.740758 -0.003802 -1.464754
v 0.752397 0.436899 -1.440903
v 0.603996 0.019188 -2.146018
|
f 1 2 3
f 4 5 6
f 7 8 9
f 10 7 11
f 5 12 7
f 13 14 12
f 15 16 17
f 18 19 20
f 21 6 10
f 21 10 22
f 23 13 4
f 24 25 3
f 26 27 28
f 28 29 26
f 1 30 31
f 31 2 1
f 1 25 32
f 33 34 35
f 36 37 38
f 39 36 38
f 40 41 42
f 41 39 38
f 43 44 45
f 25 1 3
f 46 47 48
f 4 13 5
f 21 4 6
f 11 7 9
f 10 6 7
f 22 10 11
f 6 5 7
f 49 48 50
f 5 13 12
f 26 29 51
f 46 52 47
f 53 24 3
f 43 27 26
f 51 29 30
f 16 47 33
f 54 40 42
f 38 37 55
f 42 41 38
f 55 54 42
f 38 55 42
f 56 3 2
f 48 49 57
f 57 46 48
f 4 58 59
f 60 9 61
f 62 63 60
f 59 60 64
f 65 64 66
f 67 68 69
f 70 71 72
f 21 62 58
f 21 22 62
f 23 4 65
f 73 3 74
f 29 28 75
f 75 76 29
f 2 31 77
f 77 56 2
f 56 78 74
f 79 80 81
f 82 83 37
f 84 83 82
f 40 85 86
f 86 83 84
f 87 88 89
f 74 3 56
f 46 90 91
f 4 59 65
f 21 58 4
f 63 9 60
f 62 60 58
f 22 63 62
f 58 60 59
f 92 93 90
f 59 64 65
f 76 94 29
f 46 91 52
f 95 3 73
f 87 76 75
f 94 56 77
f 69 79 91
f 54 85 40
f 83 55 37
f 85 83 86
f 55 85 54
f 83 85 55
f 90 46 57
f 57 92 90
f 16 15 48
f 48 47 16
f 33 35 17
f 17 16 33
f 69 91 90
f 90 67 69
f 34 33 47
f 47 52 34
f 81 52 91
f 91 79 81
f 79 69 68
f 68 80 79
f 89 96 76
f 76 87 89
f 52 75 28
f 75 52 88
f 88 87 75
f 44 43 26
f 26 97 44
f 52 28 27
f 27 43 45
f 45 52 27
f 29 31 30
f 29 77 31
f 29 94 77
f 1 51 30
f 93 92 65
f 65 66 93
f 92 57 23
f 23 65 92
f 50 14 13
f 13 49 50
f 49 13 23
f 23 57 49
f 53 3 98
f 99 53 98
f 45 44 100
f 100 101 45
f 102 103 104
f 104 105 102
f 106 107 108
f 105 109 107
f 107 24 53
f 45 101 110
f 111 112 113
f 114 111 115
f 116 115 117
f 14 116 19
f 117 118 119
f 115 113 118
f 12 19 7
f 116 117 20
f 19 18 120
f 8 121 9
f 7 120 8
f 50 122 14
f 19 116 20
f 117 18 20
f 108 53 99
f 109 97 123
f 99 98 124
f 18 119 120
f 125 126 127
f 128 105 106
f 129 106 130
f 107 109 131
f 97 26 132
f 24 107 133
f 25 24 134
f 135 136 137
f 138 139 140
f 132 51 139
f 141 142 143
f 144 145 138
f 123 132 146
f 131 123 146
f 140 144 138
f 110 147 148
f 35 149 150
f 90 151 152
f 152 153 90
f 52 45 149
f 149 110 150
f 154 155 156
f 99 157 158
f 159 160 161
f 161 162 159
f 163 157 39
f 124 164 37
f 157 124 36
f 165 163 41
f 40 165 41
f 132 26 51
f 102 105 128
f 155 106 108
f 130 106 155
f 106 105 107
f 111 127 112
f 108 107 53
f 115 111 113
f 166 114 115
f 149 45 110
f 12 14 19
f 117 115 118
f 120 119 121
f 7 19 120
f 8 120 121
f 110 101 147
f 167 48 15
f 100 168 101
f 154 130 155
f 131 109 123
f 157 99 124
f 18 117 119
f 169 125 127
f 129 128 106
f 133 107 131
f 104 170 105
f 123 97 132
f 134 24 133
f 32 25 134
f 139 51 140
f 34 52 149
f 148 147 171
f 165 154 163
f 124 98 164
f 40 154 165
f 163 154 156
f 41 163 39
f 36 124 37
f 39 157 36
f 95 98 3
f 172 98 95
f 173 174 89
f 89 88 173
f 175 176 103
f 103 102 175
f 177 178 151
f 151 179 177
f 180 159 181
f 175 181 182
f 181 95 73
f 88 183 173
f 184 113 112
f 179 185 184
f 186 187 185
f 114 166 122
f 122 188 114
f 66 72 186
f 187 119 118
f 185 118 113
f 64 60 72
f 186 71 187
f 72 189 70
f 61 9 121
f 60 61 189
f 93 66 190
f 72 71 186
f 187 71 70
f 159 172 95
f 182 191 96
f 172 192 98
f 70 189 119
f 193 127 126
f 128 180 175
f 129 130 180
f 181 194 182
f 96 195 76
f 73 196 181
f 74 197 73
f 198 199 200
f 195 201 94
f 202 203 204
f 205 206 207
f 191 208 195
f 194 208 191
f 209 206 205
f 183 210 211
f 80 212 213
f 52 213 88
f 213 212 183
f 154 214 161
f 162 215 172
f 158 157 163
f 163 156 158
f 214 84 215
f 192 37 164
f 215 82 192
f 216 86 214
f 40 86 216
f 195 94 76
f 102 128 175
f 160 159 180
f 130 160 180
f 180 181 175
f 184 112 127
f 159 95 181
f 185 113 184
f 185 179 217
f 213 183 88
f 64 72 66
f 187 118 185
f 189 121 119
f 60 189 72
f 61 121 189
f 183 211 173
f 153 67 90
f 174 173 218
f 154 160 130
f 194 191 182
f 215 192 172
f 70 119 187
f 127 193 219
f 129 180 128
f 196 194 181
f 176 175 220
f 191 195 96
f 197 196 73
f 78 197 74
f 201 206 209
f 213 52 81
f 210 221 211
f 216 214 154
f 192 164 98
f 40 216 154
f 162 161 214
f 214 215 162
f 86 84 214
f 82 37 192
f 84 82 215
f 144 140 51
f 51 1 144
f 193 220 222
f 222 223 193
f 101 168 224
f 224 225 101
f 173 211 178
f 223 222 218
f 218 173 223
f 125 225 224
f 224 170 125
f 48 167 226
f 226 188 48
f 211 221 152
f 67 153 227
f 227 68 67
f 15 17 228
f 228 167 15
f 167 228 171
f 171 226 167
f 153 152 221
f 221 227 153
f 35 34 149
f 80 213 81
f 147 226 171
f 226 147 229
f 229 188 226
f 230 114 188
f 188 229 230
f 229 101 225
f 225 230 229
f 169 230 225
f 225 125 169
f 219 177 179
f 179 184 219
f 151 178 211
f 211 152 151
f 101 229 147
f 219 193 223
f 223 177 219
f 184 127 219
f 111 169 127
f 169 111 114
f 114 230 169
f 177 223 173
f 173 178 177
f 142 141 32
f 32 134 142
f 145 144 1
f 1 32 145
f 136 135 134
f 134 133 136
f 200 196 197
f 197 198 200
f 204 197 78
f 78 202 204
f 196 231 194
f 133 131 232
f 205 56 94
f 94 209 205
f 207 78 56
f 56 205 207
f 94 201 209
f 108 158 156
f 156 155 108
f 160 154 161
f 159 162 172
f 108 99 158
f 126 103 176
f 126 104 103
f 170 104 126
f 126 125 170
f 170 224 109
f 109 105 170
f 168 100 97
f 97 109 168
f 109 224 168
f 97 100 44
f 182 218 222
f 220 193 126
f 126 176 220
f 220 175 182
f 182 222 220
f 96 89 174
f 218 182 96
f 96 174 218
f 179 151 190
f 190 217 179
f 166 116 14
f 14 122 166
f 122 50 48
f 48 188 122
f 190 151 90
f 90 93 190
f 217 190 66
f 66 186 217
f 116 166 115
f 186 185 217
f 232 146 233
f 139 138 234
f 232 233 235
f 236 235 237
f 138 143 236
f 233 139 238
f 137 232 235
f 143 137 235
f 239 234 240
f 239 240 241
f 236 237 241
f 237 235 242
f 235 243 242
f 243 238 239
f 150 148 244
f 150 245 246
f 247 248 249
f 250 251 252
f 251 253 252
f 148 171 254
f 255 252 256
f 256 257 258
f 252 245 256
f 245 259 257
f 260 249 261
f 249 252 255
f 259 260 258
f 142 134 135
f 146 132 139
f 145 32 141
f 233 146 139
f 232 131 146
f 238 139 234
f 235 233 243
f 234 138 236
f 243 233 238
f 236 143 235
f 240 234 236
f 242 239 241
f 236 241 240
f 241 237 242
f 239 238 234
f 242 243 239
f 150 110 148
f 244 148 259
f 253 35 246
f 254 171 247
f 248 228 250
f 245 150 244
f 259 148 260
f 257 259 258
f 245 244 259
f 255 256 261
f 261 256 258
f 256 245 257
f 258 260 261
f 261 249 255
f 231 262 208
f 201 263 206
f 231 264 262
f 265 266 264
f 206 265 203
f 262 267 201
f 199 264 231
f 203 264 199
f 268 269 263
f 268 270 269
f 265 270 266
f 266 271 264
f 264 271 272
f 272 268 267
f 212 273 210
f 274 275 212
f 276 277 278
f 279 280 281
f 281 280 282
f 210 283 284
f 285 286 280
f 286 287 288
f 280 286 275
f 275 288 289
f 283 290 277
f 277 285 280
f 289 287 283
f 204 198 197
f 208 201 195
f 207 202 78
f 262 201 208
f 231 208 194
f 267 263 201
f 264 272 262
f 263 265 206
f 272 267 262
f 265 264 203
f 269 265 263
f 271 270 268
f 265 269 270
f 270 271 266
f 268 263 267
f 271 268 272
f 212 210 183
f 273 289 210
f 282 274 80
f 284 276 221
f 278 279 227
f 275 273 212
f 289 283 210
f 288 287 289
f 275 289 273
f 285 290 286
f 290 287 286
f 286 288 275
f 287 290 283
f 290 285 277
f 247 249 260
f 260 254 247
f 274 282 280
f 280 275 274
f 279 278 277
f 277 280 279
f 248 247 171
f 171 228 248
f 250 252 249
f 249 248 250
f 246 245 252
f 252 253 246
f 281 68 227
f 227 279 281
f 282 80 68
f 68 281 282
f 251 250 228
f 228 17 251
f 253 251 17
f 17 35 253
f 278 227 221
f 221 276 278
f 276 284 283
f 283 277 276
f 260 148 254
f 35 150 246
f 80 274 212
f 221 210 284
f 202 207 206
f 206 203 202
f 141 143 138
f 138 145 141
f 135 137 143
f 143 142 135
f 198 204 203
f 203 199 198
f 200 231 196
f 199 231 200
f 136 133 232
f 137 136 232
f 11 9 22
f 63 22 9
`