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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa pauli
const Mimosa_pauli = new Mimosa()
Mimosa_pauli.specificEpithet = 'pauli'

Mimosa_pauli.stems = new Stems()

Mimosa_pauli.stipule = new Stipule()
Mimosa_pauli.stipule.margin = new MarginStipule()
Mimosa_pauli.stipule.adaxial = new AdaxialStipule()
Mimosa_pauli.stipule.abaxial = new AbaxialStipule()

Mimosa_pauli.leaf = new Leaf()
Mimosa_pauli.leaf.petiole = new Petiole()
Mimosa_pauli.leaf.bipinnate = new Bipinnate()
Mimosa_pauli.leaf.bipinnate.rachis = new Rachis()
Mimosa_pauli.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pauli.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pauli.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pauli.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pauli.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pauli.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 4)
Mimosa_pauli.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pauli.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pauli.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pauli.inflorescence = new Inflorescence()
Mimosa_pauli.inflorescence.peduncle = new Peduncle()
Mimosa_pauli.inflorescence.spicate = new Spicate()

Mimosa_pauli.flower = new Flower()
Mimosa_pauli.flower.bracteole = new Bracteole()
Mimosa_pauli.flower.merism = '5-merous'
Mimosa_pauli.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pauli.flower.calyx = new Calyx()
Mimosa_pauli.flower.calyx.shape = 'campanulate'
Mimosa_pauli.flower.corolla = new Corolla()
Mimosa_pauli.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_pauli.androecium = new Androecium()
Mimosa_pauli.androecium.filaments = new Filaments()
Mimosa_pauli.androecium.filaments.colour = 'purplish'

Mimosa_pauli.ginoecium = new Ginoecium()
Mimosa_pauli.ginoecium.ovary = new Ovary()

Mimosa_pauli.fruit = new Fruit()
Mimosa_pauli.fruit.stipe = new Stipe()
Mimosa_pauli.fruit.replum = new Replum()
Mimosa_pauli.fruit.epicarp = new Epicarp()

Mimosa_pauli.seed = new Seed()


// Description authorship
Mimosa_pauli.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pauli.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pauli
export { Mimosa_pauli }