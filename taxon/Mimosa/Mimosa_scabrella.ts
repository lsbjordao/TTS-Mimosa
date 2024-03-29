// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Dendritic, Fasciculate, Verruciform } from '../../characters/v1/Trichomes'
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

// Description of Mimosa scabrella
const Mimosa_scabrella = new Mimosa()
Mimosa_scabrella.specificEpithet = 'scabrella'

Mimosa_scabrella.stems = new Stems()
Mimosa_scabrella.stems.trichomes = new Trichomes()
Mimosa_scabrella.stems.trichomes.dendritic = new Dendritic()
Mimosa_scabrella.stems.trichomes.dendritic.are = 'present'

Mimosa_scabrella.stipule = new Stipule()
Mimosa_scabrella.stipule.margin = new MarginStipule()
Mimosa_scabrella.stipule.adaxial = new AdaxialStipule()
Mimosa_scabrella.stipule.abaxial = new AbaxialStipule()

Mimosa_scabrella.leaf = new Leaf()
Mimosa_scabrella.leaf.petiole = new Petiole()
Mimosa_scabrella.leaf.bipinnate = new Bipinnate()
Mimosa_scabrella.leaf.bipinnate.rachis = new Rachis()
Mimosa_scabrella.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_scabrella.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_scabrella.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_scabrella.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 3)
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'

Mimosa_scabrella.inflorescence = new Inflorescence()
Mimosa_scabrella.inflorescence.peduncle = new Peduncle()
Mimosa_scabrella.inflorescence.capitate = new CapitateInflorescence()

Mimosa_scabrella.flower = new Flower()
Mimosa_scabrella.flower.bracteole = new Bracteole()
Mimosa_scabrella.flower.merism = '4-merous'
Mimosa_scabrella.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_scabrella.flower.calyx = new Calyx()
Mimosa_scabrella.flower.calyx.shape = 'campanulate'
Mimosa_scabrella.flower.corolla = new Corolla()
Mimosa_scabrella.flower.corolla.shape = 'campanulate'

Mimosa_scabrella.androecium = new Androecium()
Mimosa_scabrella.androecium.filaments = new Filaments()
Mimosa_scabrella.androecium.filaments.colour = 'yellowish'

Mimosa_scabrella.ginoecium = new Ginoecium()
Mimosa_scabrella.ginoecium.ovary = new Ovary()

Mimosa_scabrella.fruit = new Fruit()
Mimosa_scabrella.fruit.stipe = new Stipe()
Mimosa_scabrella.fruit.replum = new Replum()
Mimosa_scabrella.fruit.epicarp = new Epicarp()
Mimosa_scabrella.fruit.epicarp.trichomes = new Trichomes()
Mimosa_scabrella.fruit.epicarp.trichomes.verruciform = new Verruciform()
Mimosa_scabrella.fruit.epicarp.trichomes.verruciform.are = 'present'

Mimosa_scabrella.seed = new Seed()


// Description authorship
Mimosa_scabrella.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_scabrella.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = '2018'
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = '43'
source0.number = '1'
source0.pages = '162-197'
Mimosa_scabrella.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = '2020'
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = '272'
source1.pages = '151702'
source1.figure = '5F'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_scabrella.stems.trichomes.dendritic.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = '2020'
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = '272'
source2.pages = '151702'
source2.figure = '5G'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_scabrella.stems.trichomes.dendritic.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = '2020'
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = '272'
source3.pages = '151702'
source3.figure = '5L'
source3.obtainingMethod = 'stereoscope'
Mimosa_scabrella.stems.trichomes.dendritic.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = '2020'
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = '272'
source4.pages = '151702'
source4.figure = '6A'
source4.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.addSource(source4)

const source5 = new Source()
source5.sourceType = 'article'
source5.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source5.year = '2020'
source5.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source5.journal = 'Flora'
source5.number = '272'
source5.pages = '151702'
source5.figure = '7A'
source5.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_scabrella.fruit.epicarp.trichomes.verruciform.addSource(source5)

// Export Mimosa scabrella
export { Mimosa_scabrella }