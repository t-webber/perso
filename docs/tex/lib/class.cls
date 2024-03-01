\NeedsTeXFormat{LaTeX2e} % compulsory

\ProvidesClass{lib/class}[2024/01/08 PACE Tom Webber] % Name of file

\LoadClass[12pt, a5paper]{extbook} % build on article class

\RequirePackage{lib/global}
\RequirePackage{lib/local}
\RequirePackage{lib/boxes}

\setlength{\baselineskip}{12pt}

\pagestyle{empty}

\renewcommand{\maketitle}{

\backgroundsetup{
    scale=1,
    color=black,
    opacity=1,
    contents={%
        \includegraphics[%
            height=\dimexpr\paperheight-2cm\relax, % double the vert. margin
            width=\dimexpr\paperwidth-2cm\relax    % double the horiz. margin
            ]{example-image-a}
    },
    angle=0,
    position = current page.south west,
    nodeanchor = south west,
    hshift = 1cm, % horizontal margin
    vshift = 1cm  % vertical margin
}

\parindent=0cm

\newgeometry{margin=2cm}

\vspace*{\stretch{1}}

{\Huge\bfseries\scshape%
Nucléaire et radioactivité

Solutions durables ou catastrophes inévitable}

\vspace*{\stretch{1}}

{
\bfseries\Large
Des origines du nucléaire jusqu'au défis d'aujourd'hui : on vous explique tout
}

\vspace*{\stretch{1}}
\vspace*{\stretch{1}}
\vspace*{\stretch{1}}
\vspace*{\stretch{1}}

\newpage
\restoregeometry

\backgroundsetup{}

}
