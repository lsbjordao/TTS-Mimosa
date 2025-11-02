// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa paraibana
const Mimosa_paraibana = new Mimosa()
Mimosa_paraibana.specificEpithet = 'paraibana'

Mimosa_paraibana.stems = new Stems()

Mimosa_paraibana.stipule = new Stipule()
Mimosa_paraibana.stipule.margin = new MarginStipule()
Mimosa_paraibana.stipule.adaxial = new AdaxialStipule()
Mimosa_paraibana.stipule.abaxial = new AbaxialStipule()

Mimosa_paraibana.leaf = new Leaf()
Mimosa_paraibana.leaf.petiole = new Petiole()
Mimosa_paraibana.leaf.bipinnate = new Bipinnate()
Mimosa_paraibana.leaf.bipinnate.rachis = new Rachis()
Mimosa_paraibana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_paraibana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_paraibana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 7)
Mimosa_paraibana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_paraibana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_paraibana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_paraibana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_paraibana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_paraibana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_paraibana.inflorescence = new Inflorescence()
Mimosa_paraibana.inflorescence.peduncle = new Peduncle()
Mimosa_paraibana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_paraibana.flower = new Flower()
Mimosa_paraibana.flower.bracteole = new Bracteole()
Mimosa_paraibana.flower.merism = '4-merous'
Mimosa_paraibana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_paraibana.flower.calyx = new Calyx()
Mimosa_paraibana.flower.calyx.shape = 'campanulate'
Mimosa_paraibana.flower.corolla = new Corolla()
Mimosa_paraibana.flower.corolla.shape = ['vase-shaped', 'turbinate']

Mimosa_paraibana.androecium = new Androecium()
Mimosa_paraibana.androecium.filaments = new Filaments()
Mimosa_paraibana.androecium.filaments.colour = 'pinkish'

Mimosa_paraibana.ginoecium = new Ginoecium()
Mimosa_paraibana.ginoecium.ovary = new Ovary()

Mimosa_paraibana.fruit = new Fruit()
Mimosa_paraibana.fruit.stipe = new Stipe()
Mimosa_paraibana.fruit.replum = new Replum()
Mimosa_paraibana.fruit.epicarp = new Epicarp()

Mimosa_paraibana.seed = new Seed()

// Sources
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Simon, M.F., Sevilha, A.C. & Baumgratz, J.F.A.'
source1.year = '2024'
source1.title = 'Phylogenetic placement of *Mimosa pabstiana* reinforces a biogeographic pattern of the Pleistocene Arc Theory in *Mimosa* (Leguminosae, Caesalpinoideae)'
source1.journal = 'Phytotaxa'
source1.volume = '655'
source1.number = '2'
source1.pages = '193'
source1.imageUrl = 'https://github.com/lsbjordao/TTS-Mimosa-App-Figures/blob/main/Mimosa/Mimosa_paraibana/Mimosa_paraibana_0.png?raw=true'
source1.imageUrlLegend = 'A. Detail of capitate inflorescences. B. Detail of craspedia. C. Detail of habit. D. Detail of spicate, paniculate inflorescences (A and C, photographed by Leonardo Jales Leitão; B, photographed by Dr. Rubens Queiroz; D, photographed by M.F. Simon).'
Mimosa_paraibana.addSource(source1)

// Description authorship
Mimosa_paraibana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_paraibana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa paraibana
export { Mimosa_paraibana }