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


// Description of Mimosa monancistra
const Mimosa_monancistra = new Mimosa()
Mimosa_monancistra.specificEpithet = 'monancistra'

Mimosa_monancistra.stems = new Stems()

Mimosa_monancistra.stipule = new Stipule()
Mimosa_monancistra.stipule.margin = new MarginStipule()
Mimosa_monancistra.stipule.adaxial = new AdaxialStipule()
Mimosa_monancistra.stipule.abaxial = new AbaxialStipule()

Mimosa_monancistra.leaf = new Leaf()
Mimosa_monancistra.leaf.petiole = new Petiole()
Mimosa_monancistra.leaf.bipinnate = new Bipinnate()
Mimosa_monancistra.leaf.bipinnate.rachis = new Rachis()
Mimosa_monancistra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_monancistra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_monancistra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_monancistra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_monancistra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_monancistra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 16)
Mimosa_monancistra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_monancistra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_monancistra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_monancistra.inflorescence = new Inflorescence()
Mimosa_monancistra.inflorescence.peduncle = new Peduncle()
Mimosa_monancistra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_monancistra.flower = new Flower()
Mimosa_monancistra.flower.bracteole = new Bracteole()
Mimosa_monancistra.flower.merism = '5-merous'
Mimosa_monancistra.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_monancistra.flower.calyx = new Calyx()
Mimosa_monancistra.flower.calyx.shape = ['campanulate', 'turbinate']
Mimosa_monancistra.flower.corolla = new Corolla()
Mimosa_monancistra.flower.corolla.shape = 'vase-shaped'

Mimosa_monancistra.androecium = new Androecium()
Mimosa_monancistra.androecium.filaments = new Filaments()
Mimosa_monancistra.androecium.filaments.colour = 'pinkish'

Mimosa_monancistra.ginoecium = new Ginoecium()
Mimosa_monancistra.ginoecium.ovary = new Ovary()

Mimosa_monancistra.fruit = new Fruit()
Mimosa_monancistra.fruit.stipe = new Stipe()
Mimosa_monancistra.fruit.replum = new Replum()
Mimosa_monancistra.fruit.epicarp = new Epicarp()

Mimosa_monancistra.seed = new Seed()


// Description authorship
Mimosa_monancistra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_monancistra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa monancistra
export { Mimosa_monancistra }